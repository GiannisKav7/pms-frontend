import React from "react";
import styles from "./UnitBasicInfoBar.module.css";
import Container from "../ui/Container";
import Grid from "../ui/Grid";
import Tag from "../ui/Tag";

interface UnitBasicInfoBarProps {
    unitBarDetails: {
        name: string,
        propertyCode: string,
        buildingCode: string,
        floorCode: string,
        unitCode: string,
        weeklyRent: number,
        area: number,
        status: string,
    };
}

const UnitBasicInfoBar: React.FC<UnitBasicInfoBarProps> = ({ unitBarDetails }) => {
    const { propertyCode, name, buildingCode, floorCode, unitCode, weeklyRent, area, status } = unitBarDetails;

    return (
        <>
            <Grid columns={2} className={styles.container} marginLeft="-15px">
                <Container className={styles.leftColumn}>
                    <div className={styles.row}>
                        <div className={styles.name}>{name}</div>
                        <div className={styles.unitCode}>{unitCode}</div>

                    </div>
                    <div className={styles.row}>
                        <div className={styles.propertyCode}>{propertyCode}</div>
                        <div className={styles.buildingCode}>{buildingCode}</div>
                        <div className={styles.floorCode}>{floorCode}</div>
                        <Tag type="success">{status}</Tag>
                    </div>
                </Container>
                <Container className={styles.rightColumn}>
                    <div className={styles.weeklyRent}>Weekly Rent: {weeklyRent} EUR</div>
                    <div className={styles.area}>Area: {area} sqm</div>
                </Container>
            </Grid>
        </>
    );
};

export default UnitBasicInfoBar;