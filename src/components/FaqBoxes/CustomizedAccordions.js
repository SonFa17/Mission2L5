import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./CustomizedAccordions.css";

export default function CustomizedAccordions(props) {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className="customized-accordion-container">
            {props.data.map (content => (
            <Accordion expanded={expanded === (content.id)} onChange={handleChange(content.id)}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id={(content.id)}
                > 
                    <Typography sx={{ width: '100%', flexShrink: 0 }}>
                    {content.question}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>{content.answer}</Typography>
                </AccordionDetails>
            </Accordion>
              ))}
        </div>
    );
}
