import React, { Fragment, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { IDictionary, IMenu, IMenuItem, IPrice } from '../../interfaces';

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

export const MenuItems = (menu: IMenu): JSX.Element => {
    const [render, setRender] = useState(false);

    useEffect(() => {
        if(menu) {
            Object.keys(menu.pretzels).forEach((key: string) => {
                if(!menu.pretzels[key].display) {
                    delete menu.pretzels[key];
                }
            });
    
            Object.keys(menu.iceCreams).forEach((key: string) => {
                if(!menu.iceCreams[key].display) {
                    delete menu.iceCreams[key];
                }
            });
    
            Object.keys(menu.waterIce).forEach((key: string) => {
                if(!menu.waterIce[key].display) {
                    delete menu.waterIce[key];
                }
            });
    
            Object.keys(menu.dips).forEach((key: string) => {
                if(!menu.dips[key].display) {
                    delete menu.dips[key];
                }
            });
    
            Object.keys(menu.drinks).forEach((key: string) => {
                if(!menu.drinks[key].display) {
                    delete menu.drinks[key];
                }
            });

            setRender(true);
        }
    }, [menu]);

    const renderMenuItems = (menuItems: IDictionary<IMenuItem>): JSX.Element[] => Object.keys(menuItems).map((key: string): JSX.Element => {
        return (
            <MenuItem key={key} {...menuItems[key]} />
        );
    });

    if(!render) {
        return <Fragment />;
    }

    return (
        <section>
            {
                menu.pretzels && Object.keys(menu.pretzels).length > 0 &&
                <Fragment>
                    <h2 className="text-capitalize mt-5">Pretzels</h2>
                    {renderMenuItems(menu.pretzels)}
                </Fragment>
            }

            {
                menu.iceCreams && Object.keys(menu.iceCreams).length > 0 &&
                <Fragment>
                    <h2 className="text-capitalize mt-5">Ice Cream</h2>
                    {renderMenuItems(menu.iceCreams)}
                </Fragment>
            }

            {
                menu.waterIce && Object.keys(menu.waterIce).length > 0 &&
                <Fragment>
                    <h2 className="text-capitalize mt-5">Water Ice</h2>
                    {renderMenuItems(menu.waterIce)}
                </Fragment>
            }

            {
                menu.dips && Object.keys(menu.dips).length > 0 &&
                <Fragment>
                    <h2 className="text-capitalize mt-5">Dips</h2>
                    {renderMenuItems(menu.dips)}
                </Fragment>
            }

            {
                menu.drinks && Object.keys(menu.drinks).length > 0 &&
                <Fragment>
                    <h2 className="text-capitalize mt-5">Drinks</h2>
                    {renderMenuItems(menu.drinks)}
                </Fragment>
            }
        </section>
    );
}