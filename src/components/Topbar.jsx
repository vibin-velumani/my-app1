function Topbar(props) {
  function handleCategorySelection(e) {
    props.setSelectedCategory(e.target.value);
  }
  return (
    <>
      
      <select onChange={handleCategorySelection}>
        <option selected value=" ">
          Select Here
        </option>
        {props.category.map((c) => (
          <option value={c}>{c}</option>
        ))}
      </select>
    </>
  );
}
export default Topbar;

// const [data,setdata]=useState(studentDeatils)
