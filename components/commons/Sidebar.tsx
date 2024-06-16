"use client"
import Link from "next/link";
import AnimateHeight from 'react-animate-height';
import IconCaretsDown from '../Icon/IconCaretsDown';
import IconCaretDown from '../Icon/IconCaretDown';
import IconMenuDashboard from '../Icon/Menu/IconMenuDashboard';
import IconMinus from '../Icon/IconMinus';
import IconMenuChat from '../Icon/Menu/IconMenuChat';
import IconMenuMailbox from '../Icon/Menu/IconMenuMailbox';
import IconMenuTodo from '../Icon/Menu/IconMenuTodo';
import IconMenuNotes from '../Icon/Menu/IconMenuNotes';
import IconMenuScrumboard from '../Icon/Menu/IconMenuScrumboard';
import IconMenuContacts from '../Icon/Menu/IconMenuContacts';
import IconMenuInvoice from '../Icon/Menu/IconMenuInvoice';
import IconMenuCalendar from '../Icon/Menu/IconMenuCalendar';
import IconMenuComponents from '../Icon/Menu/IconMenuComponents';
import IconMenuElements from '../Icon/Menu/IconMenuElements';
import IconMenuCharts from '../Icon/Menu/IconMenuCharts';
import IconMenuWidgets from '../Icon/Menu/IconMenuWidgets';
import IconMenuFontIcons from '../Icon/Menu/IconMenuFontIcons';
import IconMenuDragAndDrop from '../Icon/Menu/IconMenuDragAndDrop';
import IconMenuTables from '../Icon/Menu/IconMenuTables';
import IconMenuDatatables from '../Icon/Menu/IconMenuDatatables';
import IconMenuForms from '../Icon/Menu/IconMenuForms';
import IconMenuUsers from '../Icon/Menu/IconMenuUsers';
import IconMenuPages from '../Icon/Menu/IconMenuPages';
import IconMenuAuthentication from '../Icon/Menu/IconMenuAuthentication';
import IconMenuDocumentation from '../Icon/Menu/IconMenuDocumentation';
import React, {useState , useEffect} from "react";

export default function Sidebar(){
    const [currentMenu, setCurrentMenu] = useState<string>('');
    const [errorSubMenu, setErrorSubMenu] = useState(false);
    const toggleMenu = (value: string) => {
        setCurrentMenu((oldValue) => {
            return oldValue === value ? '' : value;
        });
    };

    useEffect(() => {
        const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');
        if (selector) {
            selector.classList.add('active');
            const ul: any = selector.closest('ul.sub-menu');
            if (ul) {
                let ele: any = ul.closest('li.menu').querySelectorAll('.nav-link') || [];
                if (ele.length) {
                    ele = ele[0];
                    setTimeout(() => {
                        ele.click();
                    });
                }
            }
        }
    }, []);

    const side_items = {
        apps : [
            {id : 1 , name : "chat" , href : "/" , icon : <IconMenuChat/> },
            {id : 2 , name : "mailbox" , href : "/" , icon : <IconMenuMailbox/> },
            {id : 3 , name : "todo list" , href : "/" , icon : <IconMenuTodo/> },
            {id : 4 , name : "notes" , href : "/" , icon : <IconMenuNotes/> },
            {id : 5 , name : "scrum board" , href : "/" , icon : <IconMenuScrumboard/> },
            {id : 6 , name : "contacts" , href : "/" , icon : <IconMenuContacts/> },
            {id : 7 , name : "calendar" , href : "/" , icon : <IconMenuCalendar/> },
        ]
    }

    return <div>
        <nav
            // className={`sidebar fixed min-h-screen h-full top-0 bottom-0 w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] z-50 transition-all duration-300 ${semidark ? 'text-white-dark' : ''}`}
            className={`sidebar fixed min-h-screen h-full top-0 bottom-0 w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] z-50 transition-all duration-300`}
        >
            <div className="bg-base h-full">
                <div className="flex justify-between items-center px-4 py-3">
                    <Link href="/" className="main-logo flex items-center shrink-0">
                        <img className="w-8 ml-[5px] flex-none" src="/assets/images/logo.svg" alt="logo"/>
                        <span className="text-2xl ltr:ml-1.5 rtl:mr-1.5 font-semibold align-middle lg:inline dark:text-white-light">VRISTO</span>
                    </Link>

                    <button
                        type="button"
                        className="collapse-icon w-8 h-8 rounded-full flex items-center hover:bg-gray-500/10 dark:hover:bg-dark-light/10 dark:text-white-light transition duration-300 rtl:rotate-180"
                        // onClick={() => dispatch(toggleSidebar())}
                    >
                        <IconCaretsDown className="m-auto rotate-90"/>
                    </button>
                </div>
                <div className="h-[calc(100vh-80px)] relative dark overflow-y-auto">
                    <ul className="relative font-semibold space-y-0.5 p-4 py-0">
                        <li className="menu nav-item">
                            <button type="button"
                                    className={`${currentMenu === 'dashboard' ? 'active' : ''} nav-link group w-full`}
                                    onClick={() => toggleMenu('dashboard')}
                            >
                                <div className="flex items-center">
                                    <IconMenuDashboard
                                        className="group-hover:!text-primary shrink-0"/>
                                    <span
                                        className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">dashboard</span>
                                </div>

                                <div className={currentMenu !== 'dashboard' ? 'rtl:rotate-90 -rotate-90' : ''}>
                                    <IconCaretDown/>
                                </div>
                            </button>

                            <AnimateHeight duration={300} height={currentMenu === 'dashboard' ? 'auto' : 0}>
                                <ul className="sub-menu text-gray-500">
                                    <li>
                                        <Link href="/adf">sales</Link>
                                    </li>
                                    <li>
                                        <Link href="/analytics">analytics</Link>
                                    </li>
                                    <li>
                                        <Link href="/finance">finance</Link>
                                    </li>
                                    <li>
                                        <Link href="/crypto">crypto</Link>
                                    </li>
                                </ul>
                            </AnimateHeight>
                        </li>

                        <h2 className="py-3 px-7 flex items-center uppercase font-extrabold bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] -mx-4 mb-1">
                            <IconMinus className="w-4 h-5 flex-none hidden"/>
                            <span>apps</span>
                        </h2>

                        <li className="nav-item">
                            <ul>
                                <li className="menu nav-item">
                                    <button type="button"
                                            className={`${currentMenu === 'invoice' ? 'active' : ''} nav-link group w-full`}
                                            onClick={() => toggleMenu('invoice')}>
                                        <div className="flex items-center">
                                            <IconMenuInvoice className="group-hover:!text-primary shrink-0"/>
                                            <span
                                                className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">invoice</span>
                                        </div>

                                        <div className={currentMenu !== 'invoice' ? 'rtl:rotate-90 -rotate-90' : ''}>
                                            <IconCaretDown/>
                                        </div>
                                    </button>

                                    <AnimateHeight duration={300} height={currentMenu === 'invoice' ? 'auto' : 0}>
                                        <ul className="sub-menu text-gray-500">
                                            <li>
                                                <Link href="/apps/invoice/list">list</Link>
                                            </li>
                                            <li>
                                                <Link href="/apps/invoice/preview">preview</Link>
                                            </li>
                                            <li>
                                                <Link href="/apps/invoice/add">add</Link>
                                            </li>
                                            <li>
                                                <Link href="/apps/invoice/edit">edit</Link>
                                            </li>
                                        </ul>
                                    </AnimateHeight>
                                </li>

                                {side_items.apps.map((item) => (
                                    <li key={item.id} className="nav-item">
                                        <Link href={item.href} className="group">
                                            <div className="flex items-center">
                                                {React.cloneElement(item.icon, { className: "group-hover:!text-primary shrink-0" })}
                                                <span
                                                    className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{item.name}</span>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>

                        <h2 className="py-3 px-7 flex items-center uppercase font-extrabold bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] -mx-4 mb-1">
                            <IconMinus className="w-4 h-5 flex-none hidden"/>
                            <span>user_interface</span>
                        </h2>

                        <li className="menu nav-item">
                            <button type="button"
                                    className={`${currentMenu === 'component' ? 'active' : ''} nav-link group w-full`}
                                    onClick={() => toggleMenu('component')}>
                                <div className="flex items-center">
                                    <IconMenuComponents className="group-hover:!text-primary shrink-0"/>
                                    <span
                                        className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">components</span>
                                </div>

                                <div className={currentMenu !== 'component' ? 'rtl:rotate-90 -rotate-90' : ''}>
                                    <IconCaretDown/>
                                </div>
                            </button>

                            <AnimateHeight duration={300} height={currentMenu === 'component' ? 'auto' : 0}>
                                <ul className="sub-menu text-gray-500">
                                    <li>
                                        <Link href="/components/tabs">tabs</Link>
                                    </li>
                                    <li>
                                        <Link href="/components/accordions">accordions</Link>
                                    </li>
                                    <li>
                                        <Link href="/components/modals">modals</Link>
                                    </li>
                                    <li>
                                        <Link href="/components/cards">cards</Link>
                                    </li>
                                    <li>
                                        <Link href="/components/carousel">carousel</Link>
                                    </li>
                                    <li>
                                        <Link href="/components/countdown">countdown</Link>
                                    </li>
                                    <li>
                                        <Link href="/components/counter">counter</Link>
                                    </li>
                                    <li>
                                        <Link href="/components/sweetalert">sweet_alerts</Link>
                                    </li>
                                    <li>
                                        <Link href="/components/timeline">timeline</Link>
                                    </li>
                                    <li>
                                        <Link href="/components/notifications">notifications</Link>
                                    </li>
                                    <li>
                                        <Link href="/components/media-object">media_object</Link>
                                    </li>
                                    <li>
                                        <Link href="/components/list-group">list_group</Link>
                                    </li>
                                    <li>
                                        <Link href="/components/pricing-table">pricing_tables</Link>
                                    </li>
                                    <li>
                                        <Link href="/components/lightbox">lightbox</Link>
                                    </li>
                                </ul>
                            </AnimateHeight>
                        </li>

                        <li className="menu nav-item">
                            <button type="button"
                                    className={`${currentMenu === 'element' ? 'active' : ''} nav-link group w-full`}
                                    onClick={() => toggleMenu('element')}>
                                <div className="flex items-center">
                                    <IconMenuElements className="group-hover:!text-primary shrink-0"/>
                                    <span
                                        className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">elements</span>
                                </div>

                                <div className={currentMenu !== 'element' ? 'rtl:rotate-90 -rotate-90' : ''}>
                                    <IconCaretDown/>
                                </div>
                            </button>

                            <AnimateHeight duration={300} height={currentMenu === 'element' ? 'auto' : 0}>
                                <ul className="sub-menu text-gray-500">
                                    <li>
                                        <Link href="/elements/alerts">alerts</Link>
                                    </li>
                                    <li>
                                        <Link href="/elements/avatar">avatar</Link>
                                    </li>
                                    <li>
                                        <Link href="/elements/badges">badges</Link>
                                    </li>
                                    <li>
                                        <Link href="/elements/breadcrumbs">breadcrumbs</Link>
                                    </li>
                                    <li>
                                        <Link href="/elements/buttons">buttons</Link>
                                    </li>
                                    <li>
                                        <Link href="/elements/buttons-group">button_groups</Link>
                                    </li>
                                    <li>
                                        <Link href="/elements/color-library">color_library</Link>
                                    </li>
                                    <li>
                                        <Link href="/elements/dropdown">dropdown</Link>
                                    </li>
                                    <li>
                                        <Link href="/elements/infobox">infobox</Link>
                                    </li>
                                    <li>
                                        <Link href="/elements/jumbotron">jumbotron</Link>
                                    </li>
                                    <li>
                                        <Link href="/elements/loader">loader</Link>
                                    </li>
                                    <li>
                                        <Link href="/elements/pagination">pagination</Link>
                                    </li>
                                    <li>
                                        <Link href="/elements/popovers">popovers</Link>
                                    </li>
                                    <li>
                                        <Link href="/elements/progress-bar">progress_bar</Link>
                                    </li>
                                    <li>
                                        <Link href="/elements/search">search</Link>
                                    </li>
                                    <li>
                                        <Link href="/elements/tooltips">tooltips</Link>
                                    </li>
                                    <li>
                                        <Link href="/elements/treeview">treeview</Link>
                                    </li>
                                    <li>
                                        <Link href="/elements/typography">typography</Link>
                                    </li>
                                </ul>
                            </AnimateHeight>
                        </li>

                        <li className="menu nav-item">
                            <Link href="/charts" className="group">
                                <div className="flex items-center">
                                    <IconMenuCharts className="group-hover:!text-primary shrink-0"/>
                                    <span
                                        className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">charts</span>
                                </div>
                            </Link>
                        </li>

                        <li className="menu nav-item">
                            <Link href="/widgets" className="group">
                                <div className="flex items-center">
                                    <IconMenuWidgets className="group-hover:!text-primary shrink-0"/>
                                    <span
                                        className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">widgets</span>
                                </div>
                            </Link>
                        </li>

                        <li className="menu nav-item">
                            <Link href="/font-icons" className="group">
                                <div className="flex items-center">
                                    <IconMenuFontIcons className="group-hover:!text-primary shrink-0"/>
                                    <span
                                        className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">font_icons</span>
                                </div>
                            </Link>
                        </li>

                        <li className="menu nav-item">
                            <Link href="/dragndrop" className="group">
                                <div className="flex items-center">
                                    <IconMenuDragAndDrop className="group-hover:!text-primary shrink-0"/>
                                    <span
                                        className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">drag_and_drop</span>
                                </div>
                            </Link>
                        </li>

                        <h2 className="py-3 px-7 flex items-center uppercase font-extrabold bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] -mx-4 mb-1">
                            <IconMinus className="w-4 h-5 flex-none hidden"/>
                            <span>tables_and_forms</span>
                        </h2>

                        <li className="menu nav-item">
                            <Link href="/tables" className="group">
                                <div className="flex items-center">
                                    <IconMenuTables className="group-hover:!text-primary shrink-0"/>
                                    <span
                                        className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">tables</span>
                                </div>
                            </Link>
                        </li>

                        <li className="menu nav-item">
                            <button type="button"
                                    className={`${currentMenu === 'datalabel' ? 'active' : ''} nav-link group w-full`}
                                    onClick={() => toggleMenu('datalabel')}>
                                <div className="flex items-center">
                                    <IconMenuDatatables className="group-hover:!text-primary shrink-0"/>
                                    <span
                                        className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">datatables</span>
                                </div>

                                <div className={currentMenu !== 'datalabel' ? 'rtl:rotate-90 -rotate-90' : ''}>
                                    <IconCaretDown/>
                                </div>
                            </button>

                            <AnimateHeight duration={300} height={currentMenu === 'datalabel' ? 'auto' : 0}>
                                <ul className="sub-menu text-gray-500">
                                    <li>
                                        <Link href="/datatables/basic">basic</Link>
                                    </li>
                                    <li>
                                        <Link href="/datatables/advanced">advanced</Link>
                                    </li>
                                    <li>
                                        <Link href="/datatables/skin">skin</Link>
                                    </li>
                                    <li>
                                        <Link href="/datatables/order-sorting">order_sorting</Link>
                                    </li>
                                    <li>
                                        <Link href="/datatables/multi-column">multi_column</Link>
                                    </li>
                                    <li>
                                        <Link href="/datatables/multiple-tables">multiple_tables</Link>
                                    </li>
                                    <li>
                                        <Link href="/datatables/alt-pagination">alt_pagination</Link>
                                    </li>
                                    <li>
                                        <Link href="/datatables/checkbox">checkbox</Link>
                                    </li>
                                    <li>
                                        <Link href="/datatables/range-search">range_search</Link>
                                    </li>
                                    <li>
                                        <Link href="/datatables/export">export</Link>
                                    </li>
                                    <li>
                                        <Link href="/datatables/column-chooser">column_chooser</Link>
                                    </li>
                                </ul>
                            </AnimateHeight>
                        </li>

                        <li className="menu nav-item">
                            <button type="button"
                                    className={`${currentMenu === 'forms' ? 'active' : ''} nav-link group w-full`}
                                    onClick={() => toggleMenu('forms')}>
                                <div className="flex items-center">
                                    <IconMenuForms className="group-hover:!text-primary shrink-0"/>
                                    <span
                                        className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">forms</span>
                                </div>

                                <div className={currentMenu !== 'forms' ? 'rtl:rotate-90 -rotate-90' : ''}>
                                    <IconCaretDown/>
                                </div>
                            </button>

                            <AnimateHeight duration={300} height={currentMenu === 'forms' ? 'auto' : 0}>
                                <ul className="sub-menu text-gray-500">
                                    <li>
                                        <Link href="/forms/basic">basic</Link>
                                    </li>
                                    <li>
                                        <Link href="/forms/input-group">input_group</Link>
                                    </li>
                                    <li>
                                        <Link href="/forms/layouts">layouts</Link>
                                    </li>
                                    <li>
                                        <Link href="/forms/validation">validation</Link>
                                    </li>
                                    <li>
                                        <Link href="/forms/input-mask">input_mask</Link>
                                    </li>
                                    <li>
                                        <Link href="/forms/select2">select2</Link>
                                    </li>
                                    <li>
                                        <Link href="/forms/touchspin">touchspin</Link>
                                    </li>
                                    <li>
                                        <Link href="/forms/checkbox-radio">checkbox_and_radio</Link>
                                    </li>
                                    <li>
                                        <Link href="/forms/switches">switches</Link>
                                    </li>
                                    <li>
                                        <Link href="/forms/wizards">wizards</Link>
                                    </li>
                                    <li>
                                        <Link href="/forms/file-upload">file_upload</Link>
                                    </li>
                                    <li>
                                        <Link href="/forms/quill-editor">quill_edihrer</Link>
                                    </li>
                                    <li>
                                        <Link href="/forms/markdown-editor">markdown_editor</Link>
                                    </li>
                                    <li>
                                        <Link href="/forms/date-picker">date_and_range_picker</Link>
                                    </li>
                                    <li>
                                        <Link href="/forms/clipboard">clipboard</Link>
                                    </li>
                                </ul>
                            </AnimateHeight>
                        </li>

                        <h2 className="py-3 px-7 flex items-center uppercase font-extrabold bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] -mx-4 mb-1">
                            <IconMinus className="w-4 h-5 flex-none hidden"/>
                            <span>user_and_pages</span>
                        </h2>

                        <li className="menu nav-item">
                            <button type="button"
                                    className={`${currentMenu === 'users' ? 'active' : ''} nav-link group w-full`}
                                    onClick={() => toggleMenu('users')}>
                                <div className="flex items-center">
                                    <IconMenuUsers className="group-hover:!text-primary shrink-0"/>
                                    <span
                                        className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">users</span>
                                </div>

                                <div className={currentMenu !== 'users' ? 'rtl:rotate-90 -rotate-90' : ''}>
                                    <IconCaretDown/>
                                </div>
                            </button>

                            <AnimateHeight duration={300} height={currentMenu === 'users' ? 'auto' : 0}>
                                <ul className="sub-menu text-gray-500">
                                    <li>
                                        <Link href="/users/profile">profile</Link>
                                    </li>
                                    <li>
                                        <Link href="/users/user-account-settings">account_settings</Link>
                                    </li>
                                </ul>
                            </AnimateHeight>
                        </li>

                        <li className="menu nav-item">
                            <button type="button"
                                    className={`${currentMenu === 'page' ? 'active' : ''} nav-link group w-full`}
                                    onClick={() => toggleMenu('page')}>
                                <div className="flex items-center">
                                    <IconMenuPages className="group-hover:!text-primary shrink-0"/>
                                    <span
                                        className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">pages</span>
                                </div>

                                <div className={currentMenu !== 'page' ? 'rtl:rotate-90 -rotate-90' : ''}>
                                    <IconCaretDown/>
                                </div>
                            </button>

                            <AnimateHeight duration={300} height={currentMenu === 'page' ? 'auto' : 0}>
                                <ul className="sub-menu text-gray-500">
                                    <li>
                                        <Link href="/pages/knowledge-base">knowledge_base</Link>
                                    </li>
                                    <li>
                                        <Link href="/pages/contact-us-boxed" target="_blank">
                                            contact_us_boxed
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/pages/contact-us-cover" target="_blank">
                                            contact_us_cover
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/pages/faq">faq</Link>
                                    </li>
                                    <li>
                                        <Link href="/pages/coming-soon-boxed" target="_blank">
                                            coming_soon_boxed
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/pages/coming-soon-cover" target="_blank">
                                            coming_soon_cover
                                        </Link>
                                    </li>
                                    <li className="menu nav-item">
                                        <button
                                            type="button"
                                            className={`
                                            ${errorSubMenu ? 'open' : ''}
                                             w-full before:bg-gray-300 before:w-[5px] before:h-[5px] before:rounded ltr:before:mr-2 rtl:before:ml-2 dark:text-[#888ea8] hover:bg-gray-100 dark:hover:bg-gray-900`}
                                            onClick={() => setErrorSubMenu(!errorSubMenu)}
                                        >
                                            error
                                            <div
                                                className={`${errorSubMenu ? 'rtl:rotate-90 -rotate-90' : ''} ltr:ml-auto rtl:mr-auto`}>
                                                <IconCaretsDown fill={true} className="w-4 h-4"/>
                                            </div>
                                        </button>
                                        <AnimateHeight duration={300} height={errorSubMenu ? 'auto' : 0}>
                                            <ul className="sub-menu text-gray-500">
                                                <li>
                                                    <a href="/pages/error404" target="_blank">
                                                        404
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/pages/error500" target="_blank">
                                                        500
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/pages/error503" target="_blank">
                                                        503
                                                    </a>
                                                </li>
                                            </ul>
                                        </AnimateHeight>
                                    </li>

                                    <li>
                                        <Link href="/pages/maintenence" target="_blank">
                                            maintenence
                                        </Link>
                                    </li>
                                </ul>
                            </AnimateHeight>
                        </li>

                        <li className="menu nav-item">
                            <button type="button"
                                    className={`${currentMenu === 'auth' ? 'active' : ''} nav-link group w-full`}
                                    onClick={() => toggleMenu('auth')}>
                                <div className="flex items-center">
                                    <IconMenuAuthentication className="group-hover:!text-primary shrink-0"/>
                                    <span
                                        className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">authentication</span>
                                </div>

                                <div className={currentMenu !== 'auth' ? 'rtl:rotate-90 -rotate-90' : ''}>
                                    <IconCaretDown/>
                                </div>
                            </button>

                            <AnimateHeight duration={300} height={currentMenu === 'auth' ? 'auto' : 0}>
                                <ul className="sub-menu text-gray-500">
                                    <li>
                                        <Link href="/auth/boxed-signin" target="_blank">
                                            login_boxed
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/auth/boxed-signup" target="_blank">
                                            register_boxed
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/auth/boxed-lockscreen" target="_blank">
                                            unlock_boxed
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/auth/boxed-password-reset" target="_blank">
                                            recover_id_boxed
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/auth/cover-login" target="_blank">
                                            login_cover
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/auth/cover-register" target="_blank">
                                            register_cover
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/auth/cover-lockscreen" target="_blank">
                                            unlock_cover
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/auth/cover-password-reset" target="_blank">
                                            recover_id_cover
                                        </Link>
                                    </li>
                                </ul>
                            </AnimateHeight>
                        </li>

                        <h2 className="py-3 px-7 flex items-center uppercase font-extrabold bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] -mx-4 mb-1">
                            <IconMinus className="w-4 h-5 flex-none hidden"/>
                            <span>supports</span>
                        </h2>

                        <li className="menu nav-item">
                            <Link href="https://vristo.sbthemes.com" target="_blank" className="nav-link group">
                                <div className="flex items-center">
                                    <IconMenuDocumentation className="group-hover:!text-primary shrink-0"/>
                                    <span
                                        className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">documentation</span>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
}