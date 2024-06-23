import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const monthMap = {
    '01': 'January',
    '02': 'February',
    '03': 'March',
    '04': 'April',
    '05': 'May',
    '06': 'June',
    '07': 'July',
    '08': 'August',
    '09': 'September',
    '10': 'October',
    '11': 'November',
    '12': 'December'
  };

export default function NewMonthForm({addMonth}) {
    const [date, setDate] = useState({
        month: '',
        year: ''
    })
    const [error, setError] = useState('');
    const navigate = useNavigate()

    
    function handleChange(evt) {
        const value = evt.target.value;
        const newYear = value.substring(0, 4);
        const newMonth = value.substring(5, 7);
    
        setDate({
          year: newYear,
          month: newMonth,
        });
        setError('');
      }
    async function handleSubmit(evt) {
        evt.preventDefault();
        addMonth(date);
        navigate('/budget')

}
    
    
      return (
        <>
          <div className="form-container">
            <form autoComplete="off" onSubmit={handleSubmit}>
              <label>Month / Year</label>
              <input type="month"
                value={`${date.year}-${date.month}`} 
                onChange={handleChange}/>
                <button type='submit'>Submit</button>
            </form>
          </div>
          <p className="error-message">&nbsp;{error}</p>
        </>
      );
    }