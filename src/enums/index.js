import { Chip } from "@mui/material";

export const StatusElement = {
  open: <Chip label="OPEN" color="primary" />,
  close: <Chip label="CLOSE" style={{ backgroundColor: 'red', color: 'white' }} />,
  holiday: <Chip label="HOLIDAY" style={{ backgroundColor: 'red', color: 'white' }} />,
};
export const CafeAvailabilityStatus = {
  open: 'open',
  close: 'close',
  holiday: 'holiday',
};
