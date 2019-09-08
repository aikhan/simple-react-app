import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { removeSelectedCountry, removeAllSelectedCountries } from '../actions';

const CurrencyDisplayComponent = props => {
	const { selectedCountries } = props;
	const [currencyValueToConvert, setCurrencyValueToConvert] = useState(0);

	return !selectedCountries ? null : (
		<Fragment>
			<div>
				<input
					type='text'
					placeholder='Enter value in Euros'
					onChange={e => setCurrencyValueToConvert(e.target.value)}
				/>
				<button
					type='button'
					onClick={() => {
						props.removeAllSelectedCountries();
					}}
				>
					Remove All
				</button>
			</div>
			<ul>
				{selectedCountries.map(country => (
					<li
						key={country.name}
						style={{
							border: '3px solid rgb(212, 212, 212)',
							marginTop: 10
						}}
					>
						Country Name: <b>{country.name}</b>, Country Population:
						{country.population} , Currencies{' '}
						<button
							type='button'
							onClick={() => {
								props.removeSelectedCountry(country);
							}}
							style={{ float: 'right' }}
						>
							Remove
						</button>
						{country.currencies.map(currency => (
							<div key={currency.name}>
								Currency code: <b>{currency.code}</b> , Currency name:{' '}
								{currency.name},
								<b>
									Converted value :
									{(currency.rate * currencyValueToConvert).toFixed(2)}{' '}
									{currency.symbol}
								</b>
							</div>
						))}
					</li>
				))}
			</ul>
		</Fragment>
	);
};

const mapStateToProps = ({ selectedCountries }) => ({
	selectedCountries
});

const mapDispatchToProps = dispatch => ({
	removeSelectedCountry: country => dispatch(removeSelectedCountry(country)),
	removeAllSelectedCountries: () => dispatch(removeAllSelectedCountries())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CurrencyDisplayComponent);
