import { jsPDF } from "jspdf";

function generatePDF(userList) {
  const doc = new jsPDF();
  doc.text("User Data", 10, 10);

  userList.forEach((user, index) => {
    const y = 20 + index * 10;
    doc.text(`User ${index + 1}:`, 10, y);
    doc.text(`Name: ${user.fullName}`, 20, y + 5);
    doc.text(`Email: ${user.email}`, 20, y + 10);
    // Add more user data properties here
  });

  doc.save("user-data.pdf");
}

export default generatePDF;
