import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";
import Filter from "../components/Filter";
import Section from "../components/Section";

const ContactsPage = () => (
  <>
    <Section title={"Phonebook"}>
      <ContactForm />
    </Section>

    <Section title={"Contacts"}>
      <Filter />
      <ContactList />
    </Section>
  </>
);
export default ContactsPage;

// onSubmit={this.formSubmitHandler}
