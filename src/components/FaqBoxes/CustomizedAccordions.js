import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./CustomizedAccordions.css";
import {useState} from 'react'

export default function CustomizedAccordions(props) {

    const [expanded, setExpanded] = useState(false);
    const [isColor, setIsColor] = useState(false);

  const handleClick = () => setIsColor((prev) => !prev);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <>
        {props.data.map (content => (
        <div key={(content.id)} className="customized-accordion-container">
            <Accordion expanded={expanded === (content.id)} onChange={handleChange(content.id)} 
                       onClick={handleClick}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel-${(content.id)}-content`}
                    id={(content.id)}
                > 
                    <Typography 
                    sx={{ width: '100%', flexShrink: 0, fontSize: 14, fontWeight: 600, textAlign: 'left'  }}>
                    {content.question}
                    </Typography>

                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{ fontSize: 14, color: isColor ? '#0076BE' : '#black', textAlign: 'left'  }} >{content.answer}</Typography>
                </AccordionDetails>
            </Accordion>
             
        </div>
         ))}
         </>
    );
}
