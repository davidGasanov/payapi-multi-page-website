import { useForm, type SubmitHandler } from "react-hook-form";
import Input from "../../../components/input";
import Button from "../../../components/button";
import { emailRegex } from "../../../constants";
import Checkbox from "../../../components/checkbox";

interface FormFields {
  name: string;
  email: string;
  companyName: string;
  title: string;
  message: string;
  subscribe: boolean;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormFields>();

  const values = watch();
  console.log("values: ", values);
  console.log("errors: ", errors);

  const onSubmit: SubmitHandler<FormFields> = async (values) => {
    console.log(values);
  };

  return (
    <form
      className="flex flex-col gap-[24px] mt-[40px] md:mt-[54px] md:max-w-[445px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        {...register("name", {
          required: "This field can't be empty",
        })}
        placeholder="Name*"
        error={errors.name?.message}
      />
      <Input
        {...register("email", {
          required: "This field can't be empty",
          validate: (value) => {
            if (!emailRegex.test(value)) {
              return "Please use a valid email address";
            }
            return true;
          },
        })}
        error={errors.email?.message}
        placeholder="Email*"
      />
      <Input {...register("companyName")} placeholder="Company Name" />
      <Input {...register("title")} placeholder="Title" />
      <Input
        multiline
        {...register("message", {
          required: "This field can't be empty",
        })}
        placeholder="Message*"
        error={errors.message?.message}
      />
      <div className="flex items-center gap-[26px]">
        <Checkbox
          {...register("subscribe")}
          checked={values.subscribe}
          onChange={(checked) => {
            setValue("subscribe", checked);
          }}
        />
        <p className="body !leading-[25px] text-san-juan-blue">
          Stay up-to-date with company announcements and updates to our API
        </p>
      </div>
      <Button variant="secondary-dark" className="max-w-[152px]">Submit</Button>
    </form>
  );
};

export default ContactForm;
