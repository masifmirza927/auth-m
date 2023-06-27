import React, { useEffect, useState } from 'react'
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import axios from 'axios';


// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#E4E4E4',
        textAlign: 'center'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    },
    imageStyles: {
        width: "200px",
        height:"auto",
        marginBottom: "10px",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: "50%!important"
    },
    emailTxt : {
        marginBottom: "10px"
    },
    smallTxt : {
        fontWeight: "normal",
        fontSize: "12px",
        marginBottom: "10px"
    }
});



function Pdf(props) {
    const [student, setStudent] = useState(null);


    useEffect(() => {
        axios.get("http://localhost:3003/student/" + props.id).then((res) => {
            console.log(res.data);
            setStudent(res.data.student);
        })
    }, []);

    if (student !== null) {
        return (
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.section}>
                        <Image src={student.image} style={styles.imageStyles}  />
                        <Text style={styles.emailTxt}>{student.name}</Text>
                        <Text style={styles.emailTxt}>{student.email}</Text>
                        <Text style={styles.smallTxt}>{student.about}</Text>
                    </View>
                </Page>
            </Document>
        )
    } else {
        return (<>
            loading...
        </>)
    }
}

export default Pdf