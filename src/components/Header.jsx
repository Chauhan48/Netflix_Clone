import {onAuthStateChanged, signOut} from 'firebase/auth';
import React, {useEffect, useState} from 'react';
import {auth} from '../utils/firebase';
import {useLocation, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {addUser, removeUser} from '../utils/userSlice';
import {LOGO, PROFILE_PICTURE} from '../utils/constants';
import {toggleSearchView} from '../utils/searchSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch(() => {
        navigate('/error');
      });
  };

  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName}));

        if (location.pathname === '/') {
          navigate('/browse');
        }
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate('/');
      }
    });

    // unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleSearchClick = () => {
    dispatch(toggleSearchView());
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black to-transparent px-8 py-4 flex items-center justify-between">
      <img src={LOGO} alt="Netflix Logo" className="w-28 md:w-32" />

      {user && (
        <div className="hidden md:flex gap-6 text-white text-sm font-medium">
          <a href="/browse" className="hover:text-gray-400">
            Home
          </a>
          <a href="/tvshows" className="hover:text-gray-400">
            TV Shows
          </a>
          <a href="#" className="hover:text-gray-400">
            Movies
          </a>
          <a href="#" className="hover:text-gray-400">
            New & Popular
          </a>
          <a href="#" className="hover:text-gray-400">
            My List
          </a>
          <button className="hover:text-gray-400" onClick={handleSearchClick}>
            Search🔍
          </button>
        </div>
      )}

      {user && (
        <div className="relative">
          <img
            src={PROFILE_PICTURE}
            alt="Profile"
            className="h-8 w-8 rounded cursor-pointer object-cover"
            onClick={toggleDropdown}
          />

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-black/75 border border-gray-700 rounded shadow-lg text-white text-sm">
              <button className="block px-4 py-2 hover:bg-gray-800">
                Manage Profile
              </button>
              <button
                onClick={handleSignOut}
                className="block px-4 py-2 hover:bg-gray-800"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
