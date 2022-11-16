import { useEffect, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";
import ContactsService from "../../services/ContactsService";
import { useState } from "react";
import toast from "../../utils/toast";
import useSafeAsyncAction from "../../hooks/useSafeAsyncAction";

export default function useEditContact() {
  const { id } = useParams();
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(true);
  const [contactName, setContactName] = useState('');

  const contactFormRef = useRef(null);
  const safeAsyncAction = useSafeAsyncAction();

  useEffect(() => {
    async function loadContact() {
      try {
        const contact = await ContactsService.getContactById(id);

        safeAsyncAction(() => {
          contactFormRef.current.setFieldsValues(contact);
          setIsLoading(false);
          setContactName(contact.name);
        });
      } catch (error) {
        safeAsyncAction(() => {
          history.push('/');
          toast({
            type: 'danger',
            text: 'Contato não encontrado',
          });
        });
      }
    }

    loadContact();
  }, [id, history, safeAsyncAction]);

  async function handleSubmit(contact) {
    try {
      const contactData = await ContactsService.updateContact(id, contact);

      setContactName(contactData.name);

      toast({
        type: 'success',
        text: 'Contato editado com sucesso!',
        duration: 3000,
      });
    } catch (error) {
      console.log(error);
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao editar o contato!',
        duration: 3000,
      });
    }
  }


  return {
    isLoading,
    contactName,
    contactFormRef,
    handleSubmit,
  };
}
