import React, { Fragment } from 'react';
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

interface SingleMenuItemPriceProps {
    value: number;
}

const SingleMenuItemPrice = (props: SingleMenuItemPriceProps): JSX.Element => {
    return (
        <Fragment>
            <Money value={props.value} />
            <Fragment>&nbsp;Each</Fragment>
        </Fragment>
    );
}

interface MultipleMenuItemPriceProps {
    quantity: number;
    value: number;
}

const MultipleMenuItemPrice = (props: MultipleMenuItemPriceProps): JSX.Element => {
    return (
        <Fragment>
            <span>{props.quantity}&nbsp;for&nbsp;</span>
            <Money value={props.value} />
        </Fragment>
    );
}

interface IOuncesProps {
    value: number;
}

const Ounces = (props: IOuncesProps): JSX.Element => {
    return (
        <Fragment>{props.value}&nbsp;oz</Fragment>
    );
}

const Divider = (): JSX.Element => (
    <Fragment>&nbsp;-&nbsp;</Fragment>
);


const MenuItem = (menuItem: IMenuItem): JSX.Element => {
    const renderSizingPrices = (): JSX.Element[] => menuItem.prices.map((price: IPrice): JSX.Element => {
        const first: boolean = menuItem.prices.indexOf(price) === 0;
        const className: string = first ? 'pe-2' : 'px-2 border-start'

        return (
            <Fragment key={uuidv4()}>
                <span className={className}>
                    { 
                        price.size && 
                        <span>{price.size}&nbsp;</span>
                    }
                    <Money value={price.ammount} />
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
    const renderMenuItems = (menuItems: IDictionary<IMenuItem>): JSX.Element[] => Object.keys(menuItems).map((key: string): JSX.Element => {
        return (
            <MenuItem key={key} {...menuItems[key]} />
        );
    });

    return (
        <section>
            <h2 className="text-capitalize">Pretzels</h2>
            {renderMenuItems(menu.pretzels)}

            <h2 className="text-capitalize mt-5">Pretzel Dogs</h2>
            {renderMenuItems(menu.pretzelDogs)}

            <h2 className="text-capitalize mt-5">Ice Cream</h2>
            {renderMenuItems(menu.iceCreams)}

            <h2 className="text-capitalize mt-5">Water Ice</h2>
            {renderMenuItems(menu.waterIce)}

            <h2 className="text-capitalize mt-5">Dips</h2>
            {renderMenuItems(menu.dips)}
        </section>
    );
}

export const MenuItems2 = (): JSX.Element => {
    return (
        <React.Fragment>
            <dl>
                <hr />

                <dt>Italian Ice</dt>
                <dd className="ms-2">
                    <div>
                        <span>Kid Size</span>
                        <Divider />
                        <Money value={1.50} />
                    </div>
                    <div>
                        <span>Small</span>
                        <Divider />
                        <Money value={2} />
                    </div>
                    <div>
                        <span>Medium</span>
                        <Divider />
                        <Money value={3} />
                    </div>
                    <div>
                        <span>Large</span>
                        <Divider />
                        <Money value={4} />
                    </div>
                </dd>

                <hr />

                <dt>OMG (Regular)</dt>
                <dd className="ms-2">
                    <div>
                        <span>Regular Size</span>
                        <Divider />
                        <SingleMenuItemPrice value={2} />
                        <Divider />
                        <MultipleMenuItemPrice quantity={3} value={5} />
                    </div>
                    <div>
                        <span>Large</span>
                        <Divider />
                        <SingleMenuItemPrice value={4} />
                        <Divider />
                        <MultipleMenuItemPrice quantity={3} value={10} />
                    </div>
                </dd>

                <hr />

                <dt>Sugar Cinnamon</dt>
                <dd className="ms-2">
                    <div>
                        <span>Regular Size</span>
                        <Divider />
                        <SingleMenuItemPrice value={2} />
                        <Divider />
                        <MultipleMenuItemPrice quantity={3} value={5} />
                    </div>
                    <div>
                        <span>Large</span>
                        <Divider />
                        <SingleMenuItemPrice value={4} />
                        <Divider />
                        <MultipleMenuItemPrice quantity={3} value={10} />
                    </div>
                </dd>

                <hr />

                <dt>All Flavors Specialt Pretzels</dt>
                <dd className="ms-2">
                    <SingleMenuItemPrice value={5} />
                    <Divider />
                    <MultipleMenuItemPrice quantity={5} value={20} />
                </dd>

                <hr />

                <dt>Pretzel Dogs</dt>
                <dd className="ms-2">
                    <div>
                        <span>Regular Size</span>
                        <Divider />
                        <SingleMenuItemPrice value={4} />
                    </div>
                    <div>
                        <span>Minis</span>
                        <Divider />
                        <SingleMenuItemPrice value={0.50} />
                    </div>
                </dd>

                <hr />

                <dt>Pretzel Pizza Pocket</dt>
                <dd className="ms-2">
                    <Money value={5} />
                </dd>

                <hr />

                <dt>Pretzel Porkroll Links</dt>
                <dd className="ms-2">
                    <Money value={5} />
                </dd>

                <hr />

                <dt>All Other Pretzel Sandwiches</dt>
                <dd className="ms-2">
                    <Money value={6} />
                </dd>

                <hr />

                <dt>Nuggets</dt>
                <dd className="ms-2">
                    <div>
                        <MultipleMenuItemPrice quantity={25} value={8} />
                    </div>
                    <div>
                        <MultipleMenuItemPrice quantity={50} value={15} />
                    </div>
                </dd>

                <hr />

                <dt>Specialty Nuggets</dt>
                <dd className="ms-2">
                    <div>
                        <MultipleMenuItemPrice quantity={12} value={8} />
                    </div>
                    <div>
                        <MultipleMenuItemPrice quantity={25} value={15} />
                    </div>
                </dd>

                <hr />

                <dt>Soft Drinks</dt>
                <dd className="ms-2">
                    <div>
                        <Ounces value={16} />
                        <Divider />
                        <Money value={2} />
                    </div>
                    <div>
                        <Ounces value={20} />
                        <Divider />
                        <Money value={2.50} />
                    </div>
                </dd>

                <hr />

                <dt>Bottled Water</dt>
                <dd className="ms-2">
                    <Money value={1.50} />
                </dd>
            </dl>
        </React.Fragment>
    );
}