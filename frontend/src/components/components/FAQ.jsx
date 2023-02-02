import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FAQ() {
  return (
    <>
      <Accordion sx={{boxShadow: 0}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ fontSize: 50 }} sx={{ color: "#F83E7D" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography variant="h4" sx={{ ml: 10, pt: 4 }}>
            What is Aisha Comfortable Co-living?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ ml: 10, pt: 4 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{boxShadow: 0}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ fontSize: 50 }} sx={{ color: "#F83E7D" }} />}
          aria-controls="panel2a-content"
          id="panel2a-header">
          <Typography variant="h4" sx={{ ml: 10, pt: 4 }}>
            Billing
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ ml: 10, pt: 4 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{boxShadow: 0}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ fontSize: 50 }} sx={{ color: "#F83E7D" }} />}
          aria-controls="panel3a-content"
          id="panel3a-header">
          <Typography variant="h4" sx={{ ml: 10, pt: 4}}>
            Account Details
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ ml: 10, pt: 4 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ fontSize: 50 }} sx={{ color: "#F83E7D" }} />}
          aria-controls="panel4a-content"
          id="panel4a-header">
          <Typography>Work in Progress</Typography>
        </AccordionSummary>
      </Accordion>
    </>
  );
}
