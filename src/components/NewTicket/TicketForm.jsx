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

const TicketForm = () => {
      const {
      control,
      register,
      handleSubmit,
      formState: { errors, isSubmitting, isSubmitSuccessful },
      reset,
    } = useForm({
      resolver: zodResolver(schema),
    });
   
  const { id } = useParams();

  const selectedTicket = useSelector((state) => state.data.selectedTicket);
  
  const dispatch = useDispatch();
  
   useEffect(() => {
     if (isSubmitSuccessful) {
       reset();
     }
   }, [isSubmitSuccessful, reset]);
  
  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (selectedTicket !== undefined) {
      dispatch(
        updateTicket({
          id:id,
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
          defaultValue={
            selectedTicket !== undefined ? selectedTicket.priority : undefined
          }
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
          defaultValue={
            selectedTicket !== undefined ? selectedTicket.status : undefined
          }
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
          value={
            selectedTicket !== undefined
              ? selectedTicket.description
              : undefined
          }
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