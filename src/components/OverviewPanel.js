import React from "react";
import { List, ListItem, ListItemText, Badge } from "@mui/material";

const OverviewPanel = ({ questions, currentQuestion, answers, onSelect }) => {
  return (
    <List>
      {questions.map((_, index) => (
        <ListItem
          key={index}
          button
          selected={currentQuestion === index}
          onClick={() => onSelect(index)}
        >
          <Badge
            color={answers[index] ? "success" : "default"}
            badgeContent={answers[index] ? "✔" : ""}
          >
            <ListItemText primary={`Question ${index + 1}`} />
          </Badge>
        </ListItem>
      ))}
    </List>
  );
};

export default OverviewPanel;
