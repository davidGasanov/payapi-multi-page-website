import { useForm } from "react-hook-form";
import Input from "../../../components/input";

interface FormFields {
  name: string;
  email: string;
  companyName: string;
  title: string;
  message: string;
}

const ContactForm = () => {
  const { register, handleSubmit, watch } = useForm<FormFields>();

  const values = watch();
  console.log("values: ", values);

  return (
    <form className="flex flex-col gap-[24px]">
      <Input {...register("name")} placeholder="name" />
    </form>
  );
};

export default ContactForm;
