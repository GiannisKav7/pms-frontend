import React from "react";
import { useParams } from "react-router-dom";
import ContactsDetails from "../features/ContactDetails";

interface ContactPageParams {
  id: string;
}

const ContactPage: React.FC = () => {
  const { id } = useParams<ContactPageParams>();

  return (
    <div>
      <ContactsDetails />
    </div>
  );
};

export default ContactPage;
