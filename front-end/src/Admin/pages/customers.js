import{ React, useMemo,useEffect ,useState} from 'react'
import { useTable  } from "react-table";
import { Input ,Button} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import axios from '../../Auth/componets/axios';
export default function Customers() {
const [page,setPage]=useState(1);
const [pagination,setPagination]=useState("20");
const [data, setData] = useState([]);
const [id,setId]= useState("");
const [firstname,setFirstname]=useState("");
const [email,setEmail]=useState("");


// Using useEffect to call the API once mounted and set the data
useEffect(() => {
    
    var arr=[];
  (async () => {
    axios.get("http://127.0.0.1:8000/api/auth/index?page=".concat(page).concat("&firstname=&email=&id=&pagination=").concat(pagination))
    .then(response => {
      for (var i=0; i<response.data.data.data.length;i++ ){
        arr= arr.concat([{"id": response.data.data.data[i].id, "firstname":response.data.data.data[i].firstname, "email":response.data.data.data[i].email}]);
      }
      setData(arr);
    })
    .catch(error => {
      console.log(error)
    })
   
    console.log(data);
    console.log(arr)
  }
  )();
},[]);


    const handleFilterChangeId = e => {
        const value = e.target.value || undefined;
       
    var arr=[];
    (async () => {
        axios.get("http://127.0.0.1:8000/api/auth/index?page=".concat(page).concat("&firstname=").concat(firstname).concat("&email=").concat(email).concat("&id=").concat(value).concat("&pagination=").concat(pagination))
      .then(response => {
        for (var i=0; i<response.data.data.data.length;i++ ){
          arr= arr.concat([{"id": response.data.data.data[i].id, "firstname":response.data.data.data[i].firstname, "email":response.data.data.data[i].email}]);
        }
        setData(arr);
      })
      .catch(error => {
        console.log(error)
      })
     setId(value);
      console.log(data);
      console.log(arr)
    }
    )();
        
    setId(value);
      };

      const handleFilterChangeFirstname = e => {
        const value = e.target.value || undefined;
       
    var arr=[];
    (async () => {
        axios.get("http://127.0.0.1:8000/api/auth/index?page=".concat(page).concat("&firstname=").concat(value).concat("&email=").concat(email).concat("&id=").concat(id).concat("&pagination=").concat(pagination))
      .then(response => {
        for (var i=0; i<response.data.data.data.length;i++ ){
          arr= arr.concat([{"id": response.data.data.data[i].id, "firstname":response.data.data.data[i].firstname, "email":response.data.data.data[i].email}]);
        }
        setData(arr);
      })
      .catch(error => {
        console.log(error)
      })
     
      console.log(data);
      console.log(arr)
    }
    )();
      setFirstname(value);  
      };

      const handleFilterChangeEmail = e => {
        const value = e.target.value || undefined;
       
    var arr=[];
    (async () => {
        axios.get("http://127.0.0.1:8000/api/auth/index?page=".concat(page).concat("&firstname=").concat(firstname).concat("&email=").concat(value).concat("&id=").concat(id).concat("&pagination=").concat(pagination))
      .then(response => {
        for (var i=0; i<response.data.data.data.length;i++ ){
          arr= arr.concat([{"id": response.data.data.data[i].id, "firstname":response.data.data.data[i].firstname, "email":response.data.data.data[i].email}]);
        }
        setData(arr);
      })
      .catch(error => {
        console.log(error)
      })
     
      console.log(data);
      console.log(arr)
    }
    )();
       
    setEmail(value);
      };
      const handelClickBack= e => {
          console.log("back");
          
         
         
          var arr=[];
          (async () => {
              axios.get("http://127.0.0.1:8000/api/auth/index?page=".concat(page-1).concat("&firstname=").concat(firstname).concat("&email=").concat(email).concat("&id=").concat(id).concat("&pagination=").concat(pagination))
            .then(response => {
              for (var i=0; i<response.data.data.data.length;i++ ){
                arr= arr.concat([{"id": response.data.data.data[i].id, "firstname":response.data.data.data[i].firstname, "email":response.data.data.data[i].email}]);
              }
              setData(arr);
            })
            .catch(error => {
              console.log(error)
            })
           
            console.log(data);
            console.log(arr)
            if (page==1){
                setPage(page+1);
            }
            setPage(page-1);
          }
          )();
console.log(page);


      };

      const handelClickNext = e => {
        console.log("back");
        
       
      
        var arr=[];
        (async () => {
            axios.get("http://127.0.0.1:8000/api/auth/index?page=".concat(page+1).concat("&firstname=").concat(firstname).concat("&email=").concat(email).concat("&id=").concat(id).concat("&pagination=").concat(pagination))
          .then(response => {
            for (var i=0; i<response.data.data.data.length;i++ ){
              arr= arr.concat([{"id": response.data.data.data[i].id, "firstname":response.data.data.data[i].firstname, "email":response.data.data.data[i].email}]);
            }
            setData(arr);
          })
          .catch(error => {
            console.log(error)
          })
         
          console.log(data);
          console.log(arr)
        }
        )();
        setPage(page+1);
console.log(page);


    };

   const handleChange = event => {
     var value=20;
     if (event.target.value==1){
       value = 20;
     }
     if (event.target.value==2){
      value = 40;
    }
    if (event.target.value==3){
      value = 60;
    }
     
        console.log(event.target.value);
    var arr=[];
    (async () => {
        axios.get("http://127.0.0.1:8000/api/auth/index?page=".concat(page).concat("&firstname=").concat(firstname).concat("&email=").concat(email).concat("&id=").concat(id).concat("&pagination=").concat(value))
      .then(response => {
        for (var i=0; i<response.data.data.data.length;i++ ){
          arr= arr.concat([{"id": response.data.data.data[i].id, "firstname":response.data.data.data[i].firstname, "email":response.data.data.data[i].email}]);
        }
        setData(arr);
      })
      .catch(error => {
        console.log(error)
      })
     
      console.log(data);
      console.log(arr)
    }
    )();
       
     setPagination(event.target.value);
   }

    const columns = useMemo(
        () => [
          {
            // Second group - Details
            Header: "Customres",
            // Second group columns
            columns: [
              {
                Header: "id",
                accessor: "id"
              },
              {
                Header: "firstname",
                accessor: "firstname"
              },
              {
                Header: "email",
                accessor: "email"
              },

            ]
          }
        ],
        []
      );
  // Use the useTable Hook to send the columns and data to build the table
  const {
   
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    rows, // rows for the table based on the data passed
    prepareRow // Prepare the row (this function needs to be called for each row before getting the row props)
  } = useTable({
   
    columns,
    data
  });

  /* 
    Render the UI for your table
    - react-table doesn't have UI, it's headless. We just need to put the react-table props from the Hooks, and it will do its magic automatically
  */
  return (
      <div>

    <table {...getTableProps()} style={{ border: 'solid 1px gray', }}>
    <thead  >
      <tr>
       <th> 
    <Input
    style={{
        padding: '5px',
      }}
  onChange={handleFilterChangeId}
  placeholder={" id"}
/>
</th>
<th>

<Input
  onChange={handleFilterChangeFirstname} 
  style={{
   
  padding: '2px',
}}
  placeholder={"firstname"}
/>
</th>
<th>
  
<Input
  onChange={handleFilterChangeEmail}
  placeholder={"email"}
  style={{
   
    padding: '5px',
  }}
/> 
</th>
</tr>
</thead>

      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()} 
              style={{
                  backgroundColor:'gray',
                border: 'solid 2px gray',
                color: 'white',
                fontWeight: 'bold',
                padding: '10px',
              }}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}   style={{
                padding: '10px',
                border: 'solid 1px gray',
                textAlign: 'center'
              }}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      
    
      </tbody>
      <tbody></tbody>
      <tbody><tr><th>
      
         <InputLabel htmlFor="period-native-simple">pagination</InputLabel>
         <Select
           native
           fullWidth
           value={pagination}
           onChange={handleChange}
           inputProps={{
             name: 'period',
             id: 'period-native-simple',
           }}
         >
           <option aria-label="None" value="" />
           <option value={1} >20</option>
           <option value={2}>40</option>
           <option value={3}>60</option>
         </Select>
   
       </th> </tr></tbody>
      <tbody align="center" >   
      <tr>
      <th></th>
              <th><Button
              onClick={handelClickBack} style={{
               marginRight:'10px',
               marginLeft:'10px',
               textAlign: 'center'
             }} variant="contained">
 Back
</Button>
<Button 
onClick={handelClickNext} style={{
               marginRight:'10px',
               marginLeft:'10px',
               textAlign: 'center'
             }} variant="contained" >
 Next
</Button></th>
</tr> 
</tbody>
  
    </table>
    </div>
  );
}