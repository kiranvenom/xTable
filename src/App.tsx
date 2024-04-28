import { useState } from 'react';
import dates from './data/data';

const App = () => {
	const [updatedDates, setUpDatedDates] = useState([...dates]);
	const handleSortByDate = () => {
		const sorted = [...updatedDates].sort((a, b) => {
			return Date.parse(b.date) - Date.parse(a.date);
		});

		setUpDatedDates(sorted);
	};

	const handleSortByViews = () => {
		const sorted = [...updatedDates].sort((a, b) => {
			return b.views - a.views;
		});

		setUpDatedDates(sorted);
	};

	return (
		<div>
			<h1>Date and Views Table</h1>

			<div className='btnDiv'>
				<button onClick={handleSortByDate}>Sort by Date</button>
				<button onClick={handleSortByViews}>Sort by Views</button>
			</div>

			<table>
				<thead>
					<tr>
						{Object.keys(updatedDates[0]).map((date) => {
							return <th className='tableHead'>{date}</th>;
						})}
					</tr>
				</thead>
				<tbody>
					{updatedDates.map((date) => {
						return (
							<tr>
								{Object.values(date).map((val) => {
									return <th>{val}</th>;
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default App;
