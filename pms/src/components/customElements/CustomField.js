import React from 'react';
import { Row, Col } from 'antd';
import styles from './CustomField.module.css'; // Update the path if needed

const CustomField = ({ fieldKey, label, displayValue, gutter = 16 }) => (
    <Row key={fieldKey} className={styles.customField}>
        <span className={styles.label}>{label}</span>
        <span className={styles.displayValue}>{displayValue}</span>
    </Row>
);

export default CustomField;