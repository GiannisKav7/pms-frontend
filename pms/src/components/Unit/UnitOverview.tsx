import React from "react";
import { useState } from "react";
import Card from "../ui/Card";
import Grid from "../ui/Grid";
import FormGroup from "../ui/FormGroup";
import styles from "./UnitOverview.module.css";
import Input from "../ui/Input";

interface UnitOverviewProps {
    unitDetails: Record<string, any>;
}

const UnitOverview: React.FC<UnitOverviewProps> = ({ unitDetails }) => {
    const [streetAddress, setStreetAddress] = useState<string>(unitDetails.streetAddress || "");
    const [number, setNumber] = useState<string>(unitDetails.number || "");
    const [address3, setAddress3] = useState<string>(unitDetails.address3 || "");
    const [address4, setAddress4] = useState<string>(unitDetails.address4 || "");
    const [city, setCity] = useState<string>(unitDetails.city || "");
    const [countyMunicipality, setCountyMunicipality] = useState<string>(unitDetails.countyMunicipality || "");
    const [prefecture, setPrefecture] = useState<string>(unitDetails.prefecture || "");
    const [region, setRegion] = useState<string>(unitDetails.region || "");
    const [postcode, setPostcode] = useState<string>(unitDetails.postcode || "");
    const [country, setCountry] = useState<string>(unitDetails.country || "");
    const [bedrooms, setBedrooms] = useState<string>(unitDetails.bedrooms || "");
    const [bathrooms, setBathrooms] = useState<string>(unitDetails.bathrooms || "");
    const [descriptionNotes, setDescriptionNotes] = useState<string>(unitDetails.descriptionNotes || "");

    function handleStreetAddressChange(event: React.ChangeEvent<HTMLInputElement>) {
        setStreetAddress(event.target.value);
    }
    function handleNumberChange(event: React.ChangeEvent<HTMLInputElement>) {
        setNumber(event.target.value);
    }
    function handleAddress3Change(event: React.ChangeEvent<HTMLInputElement>) {
        setAddress3(event.target.value);
    }
    function handleAddress4Change(event: React.ChangeEvent<HTMLInputElement>) {
        setAddress4(event.target.value);
    }
    function handleCityChange(event: React.ChangeEvent<HTMLInputElement>) {
        setCity(event.target.value);
    }
    function handleCountyMunicipalityChange(event: React.ChangeEvent<HTMLInputElement>) {
        setCountyMunicipality(event.target.value);
    }
    function handlePrefectureChange(event: React.ChangeEvent<HTMLInputElement>) {
        setPrefecture(event.target.value);
    }
    function handleRegionChange(event: React.ChangeEvent<HTMLInputElement>) {
        setRegion(event.target.value);
    }
    function handlePostcodeChange(event: React.ChangeEvent<HTMLInputElement>) {
        setPostcode(event.target.value);
    }
    function handleCountryChange(event: React.ChangeEvent<HTMLInputElement>) {
        setCountry(event.target.value);
    }
    function handleBedroomsChange(event: React.ChangeEvent<HTMLInputElement>) {
        setBedrooms(event.target.value);
    }
    function handleBathroomsChange(event: React.ChangeEvent<HTMLInputElement>) {
        setBathrooms(event.target.value);
    }
    function handleDescriptionNotesChange(event: React.ChangeEvent<HTMLInputElement>) {
        setDescriptionNotes(event.target.value);
    }

    return (
        <div className={styles.container}>
            <Card title="Unit Overview" className={styles.card}>
                <Grid columns={4} className={styles.grid} gap="0.1rem">
                    <FormGroup className={styles.groupLabels} title="Location">
                        <Input label="Street Address" value={streetAddress} onChange={handleStreetAddressChange} />
                        <Input label="Number" value={number} onChange={handleNumberChange} />
                        <Input label="Address 3" value={address3} onChange={handleAddress3Change} />
                        <Input label="Address 4" value={address4} onChange={handleAddress4Change} />
                        <Input label="City" value={city} onChange={handleCityChange} />
                       
                    </FormGroup>
                    <FormGroup className={styles.groupTitle}>   
                        <Input label="County/Municipality" value={countyMunicipality} onChange={handleCountyMunicipalityChange} />
                        <Input label="Prefecture" value={prefecture} onChange={handlePrefectureChange} />
                        <Input label="Region" value={region} onChange={handleRegionChange} />
                        <Input label="Postal Code" value={postcode} onChange={handlePostcodeChange} />
                        <Input label="Country" value={country} onChange={handleCountryChange} />
                    </FormGroup>

                    <FormGroup className={styles.groupLabels} title="Residential Info" >
                        <Input label="Number of Bedrooms" value={bedrooms} onChange={handleBedroomsChange} />
                        <Input label="Number of Bathrooms" value={bathrooms} onChange={handleBathroomsChange} />
                    </FormGroup>

                    <FormGroup className={styles.groupLabels} title="Additional Details">
                        <Input
                            label="Description/Notes"
                            value={descriptionNotes}
                            onChange={handleDescriptionNotesChange}
                            
                        />
                    </FormGroup>
                </Grid>
            </Card>
        </div>
    );
};

export default UnitOverview;