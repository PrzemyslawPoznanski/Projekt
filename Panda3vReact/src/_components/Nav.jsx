import React, { useState, useEffect } from 'react';
import { NavLink, Route } from 'react-router-dom';

import { Role } from '@/_helpers';
import { accountService } from '@/_services';

function Nav() {
    const [user, setUser] = useState({});

    useEffect(() => {
        const subscription = accountService.user.subscribe(x => setUser(x));
        return subscription.unsubscribe;
    }, []);

    // only show nav when logged in
    if (!user) return null;

    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="navbar-nav">
                    <NavLink exact to="/" className="nav-item nav-link">Home</NavLink>
                    <NavLink to="/profile" className="nav-item nav-link">Profile</NavLink>
                    
                    {user.role === Role.Admin &&
                    <NavLink to="/events" className="nav-item nav-link">Events</NavLink>
                    }
                    {user.role === Role.User &&
                    <NavLink to="/eventsUsers" className="nav-item nav-link">Events</NavLink>
                    }   
                    {user.role === Role.Admin &&
                        <NavLink to="/admin" className="nav-item nav-link">Admin</NavLink>
                    }
                    <a onClick={accountService.logout} className="nav-item nav-link">Logout</a>
                </div>
            </nav>
        </div>
    );
}

export { Nav }; 