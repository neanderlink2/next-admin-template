import { isToday } from 'date-fns';
import React, { useEffect, useState } from 'react'
import { BiHomeAlt } from 'react-icons/bi';
import Input from 'react-select/src/components/Input';
import { useBreadcrumb } from '../../components/BreadcrumbProvider';
import CheckboxInput from '../../components/Forms/Checkbox';
import DatePicker from '../../components/Forms/DatePicker';
import InputField from '../../components/Forms/InputField';
import InputMask from '../../components/Forms/MaskInput';
import Select from '../../components/Forms/Select';
import { Formulario } from '../../components/Forms/styles';
import SubmitButton from '../../components/Forms/SubmitButton';
import Layout from '../../layout';
import { wait } from '../../utils/promiseUtils';
import { toast } from 'react-toastify';
import { TwoGridContainer } from './styles';

const FormsPage = () => {
    const [loading, setLoading] = useState(false);
    const { changeBreadcrumbs } = useBreadcrumb();

    useEffect(() => {
        changeBreadcrumbs([
            { title: 'Início', href: '/', icon: <BiHomeAlt /> },
            { title: 'Formulários' }
        ]);
    }, []);

    async function handleSubmit(data: any) {
        setLoading(true);
        console.log(data);
        await wait(2000);
        setLoading(false);
        toast.success("Enviado com sucesso!")
    }

    return (
        <Layout>
            <Formulario onSubmit={handleSubmit}>
                <TwoGridContainer>
                    <InputField
                        name="nome"
                        label="Nome"
                    />
                    <InputField
                        name="codInscricao"
                        label="Código de inscrição"
                        type="number"
                    />
                    <DatePicker
                        name="dataNascimento"
                        label="Data de nascimento"
                    />
                    <InputMask
                        name="cpf"
                        label="CPF"
                        mask="999.999.999-99"
                    />
                </TwoGridContainer>
                <CheckboxInput
                    name="preferencias"
                    label="Escolha suas preferências:"
                    options={[{ id: "1", label: 'Comida', value: 'comida' }, { id: "2", label: 'Música', value: 'musica' }, { id: "3", label: "Pessoas", value: "pessoas" }]}
                />
                <Select
                    name="sexo"
                    label="Sexo"
                    placeholder="Escolha uma opção..."
                    options={[{ value: 1, display: 'Masculino' }, { value: 2, display: 'Feminino' }, { value: 3, display: 'Prefiro não escolher' }]}
                    getOptionLabel={(opt) => opt.display}
                    getOptionValue={(opt) => opt.value}
                />
                <SubmitButton loading={loading} fullWidth>Cadastrar</SubmitButton>
            </Formulario>
        </Layout>
    )
}

export default FormsPage