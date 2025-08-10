import React from 'react';
import { useState } from 'react';
import styles from './OwnerOverview.module.css'
import Card from '../ui/Card';
import FormGroup from '../ui/FormGroup';
import Input from '../ui/Input';
import Grid from '../ui/Grid';

interface OwnerOverviewProps {
    ownerDetails: Record<string, any>;
}

const OwnerOverview: React.FC<OwnerOverviewProps> = ({ownerDetails}) =>{

    const [address1, setAddress1] = useState<string>(ownerDetails.address1 || "");
    const [address2, setAddress2] = useState<string>(ownerDetails.address2 || "");
    const [address3, setAddress3] = useState<string>(ownerDetails.address3 || "");
    const [address4, setAddress4] = useState<string>(ownerDetails.address4 || "");
    const [city, setCity] = useState<string>(ownerDetails.city || "");
    const [county, setCounty] = useState<string>(ownerDetails.county || "");
    const [prefecture, setPrefecture] = useState<string>(ownerDetails.prefecture || "");
    const [region, setRegion] = useState<string>(ownerDetails.region || "");
    const [postcode, setPostcode] = useState<string>(ownerDetails.postcode || "");
    const [country, setCountry] = useState<string>(ownerDetails.country || "");
    const [description, setDescription] = useState<string>(ownerDetails.description || "");
    const [email, setEmail] = useState<string>(ownerDetails.emailAddress || "");
    const [alternateEmail, setAlternateEmail] = useState<string>(ownerDetails.alternateEmail || "");
    const [officePhone, setOfficePhone] = useState<string>(ownerDetails.officePhone || "");
    const [cellphone, setCellphone] = useState<string>(ownerDetails.cellphone || "");

    function handleAddress1Change(event: React.ChangeEvent<HTMLInputElement>) {
        setAddress1(event.target.value);
    }
    function handleAddress2Change(event: React.ChangeEvent<HTMLInputElement>) {
        setAddress2(event.target.value);
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
    function handleCountyChange(event: React.ChangeEvent<HTMLInputElement>) {
        setCounty(event.target.value);
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
    function handleDescriptionChange(event: React.ChangeEvent<HTMLInputElement>) {
        setDescription(event.target.value);
    }
    function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);
    }
    function handleAlternateEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
        setAlternateEmail(event.target.value);
    }
    function handleOfficePhoneChange(event: React.ChangeEvent<HTMLInputElement>) {
        setOfficePhone(event.target.value);
    }
    function handleCellphoneChange(event: React.ChangeEvent<HTMLInputElement>) {
        setCellphone(event.target.value);
    }
    
    return(
        <div className={styles.wrapper}>
            <Card title='Legal Entity/Owner Overview' className={styles.card}>
                <Grid columns={3} className={styles.grid}>
                    <FormGroup className={styles.groupLabels} title="Location">
                        <Input label="Address 1" value={address1} onChange={handleAddress1Change} />
                        <Input label="Address 2" value={address2} onChange={handleAddress2Change} />
                        <Input label="Address 3" value={address3} onChange={handleAddress3Change} />
                        <Input label="Address 4" value={address4} onChange={handleAddress4Change} />
                        <Input label="City" value={city} onChange={handleCityChange} />
                       
                    </FormGroup>
                    <FormGroup className={styles.groupNoTitle}>   
                        <Input label="County/Municipality" value={county} onChange={handleCountyChange} />
                        <Input label="Prefecture" value={prefecture} onChange={handlePrefectureChange} />
                        <Input label="Region" value={region} onChange={handleRegionChange} />
                        <Input label="Postal Code" value={postcode} onChange={handlePostcodeChange} />
                        <Input label="Country" value={country} onChange={handleCountryChange} />
                    </FormGroup>
                    <FormGroup title='Communication'>
                        <Input label='Email' value={email} onChange={handleEmailChange}/>
                        <Input label='Alternate Email' value={alternateEmail} onChange={handleAlternateEmailChange}/>
                        <Input label='Office Phone' value={officePhone} onChange={handleOfficePhoneChange}/>
                        <Input label='Cellphone' value={cellphone} onChange={handleCellphoneChange}/>
                        <Input label='Description' value={description} onChange={handleDescriptionChange}/>
                    </FormGroup>

                </Grid>
            </Card>
        </div>

    );
}
export default OwnerOverview;