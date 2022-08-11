import { Section } from "components/Section/Section"
import { Form } from "components/Form/Form"
import { Filter } from "components/Filter/Filter"
import { ContactsList } from "components/ContactsList/ContactsList"
import { useSelector } from "react-redux"

export const Contacts=()=>{

    const loader = useSelector(state => state.contacts.loading);

   


    return(<>
        <Section title={'PhoneBook'}>
        <Form />
      </Section>
      <Section title={'Contacts'}>
        <Filter />
        <ContactsList/>
        {loader&&<h2>Loading...</h2>}
      </Section>
      </>
    )
}