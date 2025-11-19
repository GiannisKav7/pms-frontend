import React from 'react';
import Grid from '../ui/Grid';
import Container from '../ui/Container';
import styles from "./OwnerBasicInfoBar.module.css"

interface OwnerBasicInfoBarProps{
    ownerDetails:{
        ownerCode: string;
        name1: string;
        name2:string;
        emailAddress: string;
    };
};

const OwnerBasicInfoBar: React.FC<OwnerBasicInfoBarProps> = ({ownerDetails}) =>{
    const {ownerCode, name1, name2, emailAddress} = ownerDetails;
    return(
        <Grid columns={2} className={styles.grid}>
            <Container className={styles.leftColumn}>
                <div className={styles.row}>
                    <div className={styles.name}>{name1}{name2 ? " " + name2 : ""}</div>
                </div>
                <div className={styles.row}>
                    <div className={styles.ownerCode}>{ownerCode}</div> {emailAddress}
                </div>
            </Container>

        </Grid>

        
    )
}

export default OwnerBasicInfoBar;