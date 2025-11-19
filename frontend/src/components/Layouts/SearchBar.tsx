import React, { useState } from "react";
import Grid from "../ui/Grid";
import Input from "../ui/Input";
import DatePicker from "../ui/DatePicker";
import Button from "../ui/Button";
import styles from "./SearchBar.module.css";

const SearchBar: React.FC = () => {

    const [tenant, setTenant] = useState<string>('');
    // const [dateFrom, setDateFrom] = useState<Date>();
    // const [dateTo, setDateTo] = useState<Date>();

    return(
        <>
            <Grid columns={5} className={styles.searchBar}>
                <div className={styles.header}>Lease Administration</div>
                <Input  
                    label="Search"
                    placeholder="Tenant/Customer"
                    orientation="horizontal" 
                    value={tenant}
                    onChange={e => setTenant(e.target.value)}    
                />
                <DatePicker 
                    label="Date From" 
                    orientation="horizontal"
                    
                />
                <DatePicker 
                    label="Date To" 
                    orientation="horizontal"                     
                    
                />
                <Button mode="info">Search</Button>
            </Grid>
        </>
    );
};

export default SearchBar;