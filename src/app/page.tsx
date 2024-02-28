/** @format */

import Image from 'next/image';

export default function Home() {
	return (
		<main className='text-center max-w-[1200px] w-full md:mx-auto mb-20'>
			<h1 className='max-w-2xl mx-auto mt-10 text-xl font-medium'>
				Komitet wyborczy utworzony w wyborach do Sejmu Rzeczypospolitej Polskiej i do Senatu Rzeczypospolitej Polskiej
				zarządzonych na dzień 7 kwietnia 2024
			</h1>
			<section className='mt-20 space-y-5'>
				<div>
					<h2 className='font-medium text-lg mb-2'>Dane komitetu</h2>
					<p>Komitet Wyborczy Wyborców Łukasza Kołodzieja</p>
					<p>ul. Pitiniówka 35/1</p>
					<p>34-511 Kościelisko</p>
					<p>Numer konta bankowego: </p>
					<p>REGON:</p>
					<p>NIP:</p>
				</div>
				<div>
					<h2 className='font-medium text-lg mb-2'>Pełnomocnik komitetu wyborczego</h2>
					<p>Kamil Szynal </p>
				</div>
				<div>
					<h2 className='font-medium text-lg mb-2'>Pełnomocnik finansowy komitetu</h2>
					<p>Kamil Szynal </p>
				</div>
			</section>

			<section className='md:mx-auto mt-20'>
				<h3 className='max-w-2xl mx-auto mb-20'>
					Rejestr wpłat od osób fizycznych na rzecz komitetu wyborczego kwot o wartości przekraczającej łącznie od
					jednej osoby fizycznej kwotę minimalnego wynagrodzenia za pracę.
				</h3>
				<div className='overflow-x-auto mt-10 md:p-7 px-0 mx-5 '>
					<table className='min-w-full table-auto'>
						<thead className='border-b'>
							<tr>
								<th
									scope='col'
									className='text-sm border-r border-l font-medium text-gray-900 px-6 py-4 text-left'>
									Lp.
								</th>
								<th
									scope='col'
									className='text-sm border-r border-l font-medium text-gray-900 px-6 py-4 text-left'>
									Data wpisu
								</th>
								<th
									scope='col'
									className='text-sm border-r border-l font-medium text-gray-900 px-6 py-4 text-left'>
									Data wpłaty
								</th>
								<th
									scope='col'
									className='text-sm border-r border-l font-medium text-gray-900 px-6 py-4 text-left'>
									Imię (imiona)
								</th>
								<th
									scope='col'
									className='text-sm border-r border-l font-medium text-gray-900 px-6 py-4 text-left'>
									Nazwisko
								</th>
								<th
									scope='col'
									className='text-sm border-r border-l font-medium text-gray-900 px-6 py-4 text-left'>
									Miejscowość zamieszkania
								</th>
								<th
									scope='col'
									className='text-sm border-r border-l font-medium text-gray-900 px-6 py-4 text-left'>
									Kwota wpłaty
								</th>
								<th
									scope='col'
									className='text-sm border-r border-l font-medium text-gray-900 px-6 py-4 text-left'>
									Łączna kwota wpłat
								</th>
								<th
									scope='col'
									className='text-sm border-r border-l font-medium text-gray-900 px-6 py-4 text-left'>
									Dodatkowe informacje
								</th>
							</tr>
						</thead>
						<tbody>
							<tr className='border-b'>
								<td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>Value</td>
								<td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>Value</td>
								<td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>value</td>
								<td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'> value</td>
								<td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'> value</td>
								<td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>value</td>
								<td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>value</td>
								<td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>value</td>
								<td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>value</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>

			<section className=' my-20 '>
				<h3 className='max-w-2xl mb-20 mx-auto'>Rejestr kredytów zaciągniętych przez komitet wyborczy</h3>

				<div className='overflow-x-auto  mt-10 md:p-7  mx-5 '>
					<table>
						<thead>
							<tr className='border-b'>
								<th className='text-sm font-medium text-gray border-r border-l text-gray-900 px-6 py-2 text-left'>
									LP
								</th>
								<th
									scope='col'
									className='text-sm font-medium border-r border-l text-gray-900 px-6 py-2  text-left'>
									Data wpisu
								</th>
								<th
									scope='col'
									className='text-sm border-r border-l font-medium text-gray-900 px-6 py-2 text-left'>
									Nazwa banku udzielającego kredytu
								</th>
								<th
									scope='col'
									className='text-sm border-r border-l font-medium text-gray-900 px-6 py-2 text-left'>
									Data udzielenia kredytu
								</th>
								<th
									scope='col'
									className='text-sm border-r border-l font-medium text-gray-900 px-6 py-2 text-left'>
									Kwota (wysokość) kredytu
								</th>
								<th
									scope='col'
									className='text-sm border-r border-l font-medium text-gray-900 px-6 py-2 text-left'>
									Oprocentowanie kredytu
								</th>
								<th
									scope='col'
									className='text-sm border-r border-l font-medium text-gray-900 px-6 py-2 text-left'>
									Inne niż oprocentowanie, koszty udzielenia kredytu
								</th>
								<th
									scope='col'
									className='text-sm border-r border-l font-medium text-gray-900 px-6 py-2 text-left'>
									Termin spłaty kredytu
								</th>
								<th
									scope='col'
									className='text-sm border-r border-l font-medium text-gray-900 px-6 py-2 text-left'>
									Imiona i nazwiska poręczycieli
								</th>
								<th
									scope='col'
									className='text-sm  border-r border-l font-medium text-gray-900 px-6 py-2 text-left'>
									Kwota poręczenia poszczególnych poręczycieli
								</th>
								<th
									scope='col'
									className='text-sm  border-r border-l font-medium text-gray-900 px-6 py-2 text-left'>
									Dodatkowe informacje
								</th>
							</tr>
						</thead>
						<tbody>
							<tr className='border-b'>
								<td className='px-6 py-4 whitespace-nowrap text-sm font-medium border-r border-l text-gray-900'>
									Value
								</td>
								<td className='text-sm border-r border-l text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
									Value
								</td>
								<td className='text-sm border-r border-l text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
									value
								</td>
								<td className='text-sm border-r border-l text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
									{' '}
									value
								</td>
								<td className='text-sm border-r border-l text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
									{' '}
									value
								</td>
								<td className='text-sm border-r border-l text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
									value
								</td>
								<td className='text-sm border-r border-l text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
									value
								</td>
								<td className='text-sm border-r border-l text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
									value
								</td>
								<td className='text-sm border-r border-l text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
									value
								</td>
								<td className='text-sm border-r border-l text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
									value
								</td>
								<td className='text-sm border-r border-l text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
									value
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>
		</main>
	);
}
