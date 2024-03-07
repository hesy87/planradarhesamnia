import Input from "../../components/UI/Input"
import { useForm, Controller } from "react-hook-form";
import Select from "../../components/UI/Select";
import Button from "../../components/UI/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "../../validation/Validation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTicket, updateTicket } from "../../store/dataSlice";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const TicketForm = () => {
      const {
      control,
      setValue,
      register,
      handleSubmit,
      formState: { errors, isSubmitting, isSubmitSuccessful },
      reset,
    } = useForm({
      resolver: zodResolver(schema),
    });
   
  const { id } = useParams();
  const navigate = useNavigate();

  const selectedTicket = useSelector((state) => state.data.selectedTicket);
  
  const dispatch = useDispatch();
  
   useEffect(() => {
     if (isSubmitSuccessful) {
       reset();
       navigate('/dashboard')
     }
   }, [isSubmitSuccessful, reset]);
  
  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
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
        className="flex-col flex w-1/4 mt-5 mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
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