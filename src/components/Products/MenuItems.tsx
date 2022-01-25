import React, { useContext } from 'react';
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

interface IMenuItemProps {
    displayPrices: boolean;
    menuItem: IMenuItem;
}

const MenuItem = (props: IMenuItemProps): JSX.Element => {
    const {
        displayPrices,
        menuItem
    } = props;

    const renderSizingPrices = (): JSX.Element[] => menuItem.prices.map((priceItem: IPrice): JSX.Element => {
        const first: boolean = menuItem.prices.indexOf(priceItem) === 0;
        const className: string = first ? 'pe-2' : 'px-2 border-start'

        return (
            <span key={uuidv4()} className={className}>
                {
                    priceItem.size &&
                    <span>{priceItem.size}&nbsp;</span>
                }
                <Money value={priceItem.price} />
            </span>
        );
    });

    return (
        <div className="menu-item col-12 col-md-6 col-lg-4 col-xl-3">
            <article className="card shadow border-ppp-blue-100">
                {
                    menuItem.image &&
                    <div className="card-img-top position-relative">
                        <img src={`${process.env.PUBLIC_URL}${menuItem.image}`} alt={menuItem.name} className="position-absolute" style={{ top: '50%' }} />
                    </div>
                }

                <div className="card-body">
                    <h3 className="menu-item-title m-0 text-capitalize">{menuItem.name}</h3>

                    {
                        displayPrices && menuItem.prices && menuItem.prices.length > 0 &&
                        <div className="ppp-font-bold-italic">
                            {renderSizingPrices()}
                        </div>
                    }
                </div>
            </article>
        </div>
    );
}

export const MenuItems = (): JSX.Element => {
    const data: IDataContext = useContext(DataContext);
    const { pretzels, iceCream, waterIce, dips, drinks } = data.menu;

    const renderMenuItems = (displayPrices: boolean, menuItems: IDictionary<IMenuItem>): JSX.Element[] => {
        let menuItemValues: IMenuItem[] = Object.values(menuItems).map((value: IMenuItem) => {
            return value;
        });

        // Sort images list in it's menu group
        menuItemValues.sort((a, b) => {
            if (a.image && !b.image)
                return -1;

            if (b.image && !a.image)
                return 1;

            return 0;
        });

        return menuItemValues.map((menuItem: IMenuItem): JSX.Element => {
            const menuItemProps: IMenuItemProps = {
                displayPrices,
                menuItem
            };

            return (
                <MenuItem key={uuidv4()} {...menuItemProps} />
            );
        });
    }

    return (
        <section>
            {
                Object.keys(pretzels).length > 0 &&
                <div className="row g-1 g-lg-2 mt-3">
                    <div className="col-12">
                        <h2 className="menu-group-title">Pretzels</h2>
                    </div>
                    {renderMenuItems(true, pretzels)}
                </div>
            }

            {
                Object.keys(iceCream).length > 0 &&
                <div className="row g-1 g-lg-2 mt-5">
                    <section className="col-12 row g-1 g-lg-2 align-items-center mb-2 mb-sm-0">
                        <div className="col-12 col-sm-auto me-4">
                            <h2 className="menu-group-title">Ice Cream</h2>
                        </div>

                        <div className="col-12 col-sm-auto d-flex text-nowrap flex-nowrap" style={{ height: 'fit-content' }}>
                            <span className="ppp-font-bold-italic">
                                <Money value={3} />&nbsp;Small
                            </span>
                            <span className="ppp-font-bold-italic ms-2 ps-2 border-start">
                                <Money value={5} />&nbsp;Large
                            </span>
                        </div>
                    </section>
                    {renderMenuItems(false, iceCream)}
                </div>
            }

            {
                Object.keys(waterIce).length > 0 &&
                <div className="row g-1 g-lg-2 mt-5">
                    <section className="col-12 row g-1 g-lg-2 align-items-center mb-2 mb-sm-0">
                        <div className="col-12 col-sm-auto me-4">
                            <h2 className="menu-group-title">Water Ice</h2>
                        </div>

                        <div className="col-12 col-sm-auto d-flex text-nowrap flex-nowrap" style={{ height: 'fit-content' }}>
                            <span className="ppp-font-bold-italic">
                                <Money value={2} />&nbsp;Small
                            </span>
                            <span className="ppp-font-bold-italic px-2 mx-2 border-start border-end">
                                <Money value={3} />&nbsp;Medium
                            </span>
                            <span className="ppp-font-bold-italic">
                                <Money value={5} />&nbsp;Large
                            </span>
                        </div>
                    </section>
                    {renderMenuItems(false, waterIce)}
                </div>
            }

            {
                Object.keys(dips).length > 0 &&
                <div className="row g-1 g-lg-2 mt-5">
                    <section className="col-12 row g-1 g-lg-2 align-items-center mb-2 mb-sm-0">
                        <div className="col-12 col-sm-auto me-4">
                            <h2 className="menu-group-title">Dips</h2>
                        </div>

                        <div className="col-12 col-sm-auto d-flex text-nowrap flex-nowrap" style={{ height: 'fit-content' }}>
                            <span className="ppp-font-bold-italic">
                                <Money value={0.75} />
                            </span>
                        </div>
                    </section>
                    {renderMenuItems(false, dips)}
                </div>
            }

            {
                Object.keys(drinks).length > 0 &&
                <div className="row g-1 g-lg-2 mt-5">
                    <div className="col-12">
                        <h2 className="menu-group-title">Drinks</h2>
                    </div>
                    {renderMenuItems(false, drinks)}
                </div>
            }
        </section>
    );
}