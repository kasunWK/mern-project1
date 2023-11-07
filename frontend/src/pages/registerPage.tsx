import RegisterForm from "../componant/form/registerForm";

const RegisterPage = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 h-screen ">
      <div className="bg-gradient-to-r from-neutral-400 to-neutral-600 login__imgContainer_left"></div>
      <div className="flex items-center justify-center">
        <RegisterForm />
      </div>
    </section>
  );
};

export default RegisterPage;
