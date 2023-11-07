import LoginForm from "../componant/form/loginForm";

const LoginPage = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 h-screen " >
      <div className="bg-gradient-to-r from-neutral-400 to-neutral-600 login__imgContainer_left"  ></div>
      <div className="flex items-center justify-center" >
        <LoginForm />
      </div>
    </section>
  );
};

export default LoginPage;
