import { Table } from "antd";
import Stack from "@mui/material/Stack";

export const DataTable = ({ columns, data }) => {
  return (
    <Stack>
      <Table dataSource={data} columnSource={columns} />
    </Stack>
  );
};
