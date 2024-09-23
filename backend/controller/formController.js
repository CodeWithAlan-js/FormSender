import formModel from "../model/formModel.js";

export const createForm = async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newForm = new formModel({
      name,
      email,
      subject,
      message,
    });

    await newForm.save();

    res.status(201).json({ message: "Form submitted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Form submission failed" });
  }
};
