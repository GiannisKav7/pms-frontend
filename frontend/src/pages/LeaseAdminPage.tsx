import Navbar from "../components/Layouts/Navbar";
import SearchBar from "../components/Layouts/SearchBar";
import Grid from "../components/ui/Grid";
import Card from "../components/ui/Card";
import styles from "./LeaseAdminPage.module.css";
import LeaseTable from "../components/LeaseAdmin/LeaseTable";

const LeaseAdminPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <SearchBar />

      <Grid className={styles.wrapper} columns={3}>
        <Card>
          <div>Pie</div>
        </Card>
        <Card>
          <div>Lease By Type</div>
        </Card>
        <Card>
          <div>Spaces</div>
        </Card>
      </Grid>
      <div className={styles.wrapper}>
        <LeaseTable />
      </div>
    </>
  );
};

export default LeaseAdminPage;
