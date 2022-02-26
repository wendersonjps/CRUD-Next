import { useState } from 'react';

export default function useTableForm(){
    const [visible, setVisible] = useState<'table' | 'form'>('table')

    const showForm = () => setVisible('form')
    const showTable = () => setVisible('table')

    return {
        visibleForm: visible === 'form',
        visibleTable: visible === 'table',
        showForm,
        showTable
    }
}