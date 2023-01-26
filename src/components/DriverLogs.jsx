import React, { useState } from 'react'
import Box from '@mui/material/Box'
import {
  DataGrid,
  GridToolbar,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from '@mui/x-data-grid'
import Pagination from '@mui/material/Pagination'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import { LocalizationProvider } from '@mui/x-date-pickers-pro'
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs'
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker'
import { MdCancel } from 'react-icons/md'
import { BsFillCheckCircleFill } from 'react-icons/bs'

const columns = [
  {
    field: 'date',
    headerName: 'Date',
    width: 200,
    editable: false,
  },
  {
    field: 'driver',
    headerName: 'Driver',
    width: 200,
    editable: false,
  },
  {
    field: 'co_driver',
    headerName: 'CoDriver',
    width: 200,
    editable: false,
  },
  {
    field: 'shopping_docs',
    headerName: 'Shopping docs',
    width: 200,
    editable: false,
  },
  {
    field: 'dvir',
    headerName: 'DVIR',
    width: 150,
    editable: false,
    renderCell: ({ row }) =>
      row.dvir ? (
        <BsFillCheckCircleFill color="green" size="25" />
      ) : (
        <MdCancel size="25" />
      ),
  },
]

const rows = [
  {
    id: 1,
    date: '01/12/2023',
    driver: 'KUCH KUCHDAL',
    co_driver: 'None',
    shopping_docs: '3232323',
    dvir: false,
  },
  {
    id: 2,

    date: '21/12/2023',
    driver: 'DAVID NERI',
    co_driver: 'None',
    shopping_docs: '322',
    dvir: false,
  },
  {
    id: 3,

    date: '11/12/2023',
    driver: 'EVERANGEL ALBARRAN',
    co_driver: 'None',
    shopping_docs: '',
    dvir: true,
  },
  {
    id: 4,

    date: '05/12/2023',
    driver: 'ANDREW MONTALVO',
    co_driver: 'None',
    shopping_docs: '',
    dvir: false,
  },
  {
    id: 5,

    date: '01/12/2023',
    driver: 'KENNETH CLARK',
    co_driver: 'None',
    shopping_docs: '',
    dvir: true,
  },
  {
    id: 6,

    date: '01/12/2022',
    driver: 'COREY FELDER',
    co_driver: 'None',
    shopping_docs: '5555555',
    dvir: true,
  },
  {
    id: 7,

    date: '01/12/2021',
    driver: 'CHRISTOPHER THOMAS',
    co_driver: 'None',
    shopping_docs: '222222',
    dvir: false,
  },
]

function CustomPagination() {
  const apiRef = useGridApiContext()
  const page = useGridSelector(apiRef, gridPageSelector)
  const pageCount = useGridSelector(apiRef, gridPageCountSelector)

  return (
    <Pagination
      color="primary"
      count={pageCount}
      page={page + 1}
      pagination
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  )
}

export default function DriverLogs() {
  const [pageSize, setPageSize] = useState(5)
  const [value, setValue] = React.useState([null, null])

  return (
    <Box sx={{ height: 400, margin: '30px' }}>
      <Typography variant="h6" component="h6">
        {/* TODO: vadi ime iz router-a  */}
        Driver logs
      </Typography>
      {/* DATE PICKER  */}
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        localeText={{ start: 'Starting date', end: 'Ending date' }}
      >
        <DateRangePicker
          value={value}
          onChange={(newValue) => {
            setValue(newValue)
          }}
          renderInput={(startProps, endProps) => (
            <React.Fragment>
              <TextField {...startProps} />
              <Box sx={{ mx: 2 }}> </Box>
              <TextField {...endProps} />
            </React.Fragment>
          )}
        />
      </LocalizationProvider>
      <DataGrid
        components={{
          Toolbar: GridToolbar,
          Pagination: CustomPagination,
        }}
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  )
}
