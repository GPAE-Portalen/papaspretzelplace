import React, { Fragment, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { DataContext, IDataContext } from '../../App';
import { IDictionary, IMenuItem, IPrice } from '../../interfaces';

interface IMoneyProps {
    value: number;
}

const Money = (props: IMoneyProps): JSX.Element => {
    const hasDecimal: boolean = props.value % 1 !== 0;
    const valueWithDecimal: string = hasDecimal ? props.value.toFixed(2) : `${props.value}.00`;
    const dollarValueDecimal: string = '$' + valueWithDecimal;

    return (
        <React.Fragment>
            {dollarValueDecimal}
        </React.Fragment>
    );
}

const MenuItem = (menuItem: IMenuItem): JSX.Element => {
    const renderSizingPrices = (): JSX.Element[] => menuItem.prices.map((priceItem: IPrice): JSX.Element => {
        const first: boolean = menuItem.prices.indexOf(priceItem) === 0;
        const className: string = first ? 'pe-2' : 'px-2 border-start'

        return (
            <Fragment key={uuidv4()}>
                <span className={className}>
                    { 
                        priceItem.size && 
                        <span>{priceItem.size}&nbsp;</span>
                    }
                    <Money value={priceItem.price} />
                </span>
            </Fragment>
        );
    });

    return (
        <article className="card shadow border-ppp-blue-100 mb-1">
            <div className="card-body">
                <h2 className="h6 card-title m-0 text-capitalize">{menuItem.name}</h2>
            </div>
            <div className="card-footer">
                {
                    menuItem.prices && menuItem.prices.length > 0 &&
                    <p className="card-text">
                        <small>
                            {
                                renderSizingPrices()
                            }
                        </small>
                    </p>
                }
            </div>
        </article>
    );
}

export const MenuItems = (): JSX.Element => {
    const data: IDataContext = useContext(DataContext);
    const { pretzels, iceCream, waterIce, dips, drinks } = data.menu;

    const renderMenuItems = (menuItems: IDictionary<IMenuItem>): JSX.Element[] => Object.keys(menuItems).map((key: string): JSX.Element => {
        return (
            <MenuItem key={key} {...menuItems[key]} />
        );
    });

    return (
        <section>
            {
                Object.keys(pretzels).length > 0 &&
                <Fragment>
                    <h2 className="text-capitalize mt-5">Pretzels</h2>
                    {renderMenuItems(pretzels)}
                </Fragment>
            }

            {
                Object.keys(iceCream).length > 0 &&
                <Fragment>
                    <h2 className="text-capitalize mt-5">Ice Cream</h2>
                    {renderMenuItems(iceCream)}
                </Fragment>
            }

            {
                Object.keys(waterIce).length > 0 &&
                <Fragment>
                    <h2 className="text-capitalize mt-5">Water Ice</h2>
                    {renderMenuItems(waterIce)}
                </Fragment>
            }

            {
                Object.keys(dips).length > 0 &&
                <Fragment>
                    <h2 className="text-capitalize mt-5">Dips</h2>
                    {renderMenuItems(dips)}
                </Fragment>
            }

            {
                Object.keys(drinks).length > 0 &&
                <Fragment>
                    <h2 className="text-capitalize mt-5">Drinks</h2>
                    {renderMenuItems(drinks)}
                </Fragment>
            }
        </section>
    );
}