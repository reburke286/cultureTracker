import { Table } from "antd";
import Stack from "@mui/material/Stack";

import "./data-table.css";

export const DataTable = ({ columns, data }) => {
  return (
    <div className="datatable">
      <Stack spacing={4}>
        <Table dataSource={data} columns={columns} />
      </Stack>
    </div>
  );
};
