import React from 'react'
import { PDFViewer } from '@react-pdf/renderer';
import Pdf from './Pdf';
import { useParams } from 'react-router-dom';

function ViewPdf() {
    const params = useParams();
    const id = params.id;

    return (
        <PDFViewer width="100%" height="700px">
            <Pdf id={id} />
        </PDFViewer>
    )
}

export default ViewPdf