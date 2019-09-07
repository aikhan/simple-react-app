import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { removeSelectedCountry, removeAllSelectedCountries } from '../actions';

const CurrencyDisplayComponent = props => {
	const { selectedCountries } = props;

	return !selectedCountries ? null : (
		<Fragment>
			<div>
				<input type='text' name='name' placeholder='Enter value in Euros' />
			</div>
			<ul>
				<button
					type='button'
					onClick={() => {
						props.removeAllSelectedCountries();
					}}
				>
					Remove All
				</button>
				{selectedCountries.map(country => (
					<li key={country.name}>
						Country Name: {country.name} , Country Population:
						{country.population} , Currencies{' '}
						<button
							type='button'
							onClick={() => {
								props.removeSelectedCountry(country);
							}}
						>
							Remove
						</button>
						{country.currencies.map(currency => (
							<div className='currency-details' key={currency.name}>
								Currency code = {currency.code} , Currency name ={currency.name}
								, Currency Symbol = {currency.symbol}
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
