import Input from "../../components/UI/Input"
import { useForm, Controller } from "react-hook-form";
import Select from "../../components/UI/Select";
import Button from "../../components/UI/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "../../validation/Validation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTicket, getOneTicket, updateTicket } from "../../store/dataSlice";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const TicketForm = () => {
      const {
        control, //methods for registering components
        setValue, //dynamically set the value of a registered field
        register, //apply validation rules
        handleSubmit, //receive the form data if form validation is successful.
        formState: { errors, isSubmitting, isSubmitSuccessful }, //information about the entire form state
        reset, //reset the forms elements
      } = useForm({
        resolver: zodResolver(schema), //validat input data with zod by resolver
        //Integrates with your preferred schema validation library
      });
   
  const { id } = useParams(); //get id of edited ticket passed to this component 
  const navigate = useNavigate();

  //get data of the selected ticket for editing 
  const selectedTicket = useSelector((state) => state.data.selectedTicket); 
  
  const dispatch = useDispatch();
  
  //this useEffect responsible for reset form after successfull submiting ensure by react hook form
  //after sumbit navigate to dashboard
  //clear state
   useEffect(() => {
     if (isSubmitSuccessful) {
       reset();
       navigate('/dashboard')
       dispatch(getOneTicket());
     }
   }, [isSubmitSuccessful, reset]);
  
  
  //time out just a waiting time for showing the progress in button
  //if we are in editing view pass state to update reducer
  //if we are in new ticket view pass state to add ticket reducer
  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (selectedTicket !== undefined) {
      dispatch(
        updateTicket({
          id: selectedTicket.id,
          subject: data.subject,
          status: data.status,
          priority: data.priority,
          description: data.description,
        })
      ); }
    else {
    dispatch(
     addTicket({
      subject: data.subject,
      status: data.status,
      priority: data.priority,
      description: data.description,
              })
            );
          }
  };


  //setValue responsible for pass state to react hook form element in editing view
  //after editing and navigate to another page state remove from the elements 
  useEffect(() => {
    setValue(
      "subject",
      selectedTicket !== undefined ? selectedTicket.subject : undefined
    );
    setValue(
      "description",
      selectedTicket !== undefined ? selectedTicket.description : undefined
    );
    setValue(
      "priority",
      selectedTicket !== undefined ? selectedTicket.priority : undefined
    );
    setValue(
      "status",
      selectedTicket !== undefined ? selectedTicket.status : undefined
    );
  }, [selectedTicket,setValue]);

  return (
    <>
      <form
        className="flex-col flex md:w-2/3 items-center mt-5 mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* header text base on the view page edit or new  */}
        {id !== undefined ? <h1>Edit Ticket</h1> : <h1>New Ticket</h1>} 
        <Input
          placeholder={"Subject"}
          register={register("subject")} 
        />
        {errors.subject && (
          <div className="text-blue-500">{errors.subject.message}</div>
        )}
        <Controller
          name="priority"
          control={control}
          render={({ field }) => (
            <Select
              value={field.value}
              placeholder={"Priority"}
              onChange={(e) => field.onChange(parseInt(e.target.value))}
              fields={[1, 2, 3]}
            />
          )}
        />
        {errors.priority && (
          <div className="text-blue-500">{errors.priority.message}</div>
        )}
        <Controller
          name="status"
          control={control}
          render={({ field }) => (
            <Select
              value={field.value}
              placeholder={"Status"}
              onChange={(e) => field.onChange(e.target.value)}
              fields={["new", "active", "closed"]}
            />
          )}
        />
        {errors.status && (
          <div className="text-blue-500">{errors.status.message}</div>
        )}
        <Input
          placeholder="Description"
          register={register("description")}
        />
        <Button
          text={
            isSubmitting ? (
              <span className="loading loading-bars loading-sm"></span>
            ) : selectedTicket !== undefined ? (
              "Edit"
            ) : (
              "Submit"
            )
          }
          type={"submit"}
          color={"btn-accent mt-2"}
          disabled={isSubmitting}
        />
      </form>
    </>
  );
}

export default TicketForm