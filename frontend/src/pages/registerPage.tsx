import RegisterForm from "../componant/form/registerForm";

const RegisterPage = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 h-screen ">
      <div className="bg-gradient-to-r from-black to-black login__imgContainer_left">
      <img
    src="/temp/sin.png"
    width="450"
    height="450"
    style={{
      display: "block",
      transition: "transform 0.8s", // Adding a transition for smooth movement
      position: "absolute", // Position the image absolutely
      top: "50%", // Vertically center the image using top: 50%
      left: "20%", // Horizontally center the image using left: 50%
      transform: "translate(-50%, -50%)", // Adjust for the image's size and centering
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translate(-50%, 50%)"; // Move the image down by 50% of its height
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translate(-50%, -50%)"; // Reset the transformation
    }}
  />
      </div>
      <div className="flex items-center justify-center">
        <RegisterForm />
      </div>
    </section>
  );
};

export default RegisterPage;
