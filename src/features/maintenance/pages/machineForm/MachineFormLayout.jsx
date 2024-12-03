import Footer from "../../../../shared/components/footer/Footer";
import Navbar from "../../../../shared/components/navbar/Navbar";
import MachineForm from "../../components/MachineForm/MachineForm";


const MachineFormLayout = () => {
  const handleFormSubmit = (formData) => {
    // Send formData to the backend API
    fetch("http://127.0.0.1:8000/api/machines/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          alert("Machine added successfully!");
        } else {
          alert("Failed to add machine.");
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="p-6">
        <Navbar></Navbar>
      {/* <h1 className="text-3xl font-bold mb-4">Machine Management</h1> */}
      <MachineForm onSubmit={handleFormSubmit} />
      <Footer></Footer>
    </div>
  );
};

export default MachineFormLayout;
