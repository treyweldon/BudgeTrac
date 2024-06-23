import NewMonthForm from '../../components/NewMonthForm/NewMonthForm';
import { createMonth } from "../../utilities/months-api"

export default function NewMonthPage() {

  async function addMonth(date){
    await createMonth(date)
  }
  return (
    <>
    <h1>Select New Month</h1>
    <NewMonthForm
    addMonth={addMonth}
    //  date={date} setDate={setDate} handleChange={handleChange} handleSubmit={handleSubmit} monthMap={monthMap} error={error} 
     />
    </>
  );
}