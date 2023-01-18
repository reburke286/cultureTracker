import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import AddIcon from "@mui/icons-material/Add";
import "./header.css";

export const Header = ({ pageTitle, onClick }) => {
  const StyledTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#A796EC",
      color: "white",
      boxShadow: theme.shadows[1],
      fontSize: 14,
      padding: "10px 10px",
    },
  }));
  return (
    <div className="header">
      <h1>{pageTitle}</h1>
      <StyledTooltip
        title={`Add ${pageTitle.substring(0, pageTitle.length - 1)}`}
        placement="top-start"
      >
        <Button className="headerBtn" variant="contained" onClick={onClick}>
          <AddIcon fontSize="large" />
        </Button>
      </StyledTooltip>
    </div>
  );
};
