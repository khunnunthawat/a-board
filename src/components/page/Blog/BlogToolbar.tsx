import React, { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';
import {
  Input,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';
import { useMediaQuery } from 'usehooks-ts';

import { OptionProps } from '@/types/common';
import * as Icons from '@/components/ui/Icons';
import CreatePostDialog from '@/components/common/CreatePostDialog';
import { communityOptions } from '@/helper/option';
import { useDebounce, usePost } from '@/hooks';

const BlogToolbar = () => {
  const { fetchGetPosts } = usePost();
  const isMobile = useMediaQuery('(min-width: 640px)');

  const [isSearching, setIsSearching] = useState(false);
  const [selectedCommunity, setSelectedCommunity] =
    useState<OptionProps | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const debouncedSearchQuery = useDebounce(searchQuery, 1000);

  const handleClearFilter = useCallback(() => {
    setSelectedCommunity(null);
  }, []);

  const handleClearSearch = useCallback(() => {
    setSearchQuery('');
  }, []);

  useEffect(() => {
    if (debouncedSearchQuery.length >= 2 || selectedCommunity) {
      fetchGetPosts(debouncedSearchQuery, selectedCommunity?.label || '');
    } else {
      fetchGetPosts('', '');
    }
  }, [debouncedSearchQuery, selectedCommunity]);

  return (
    <div className='flex items-center justify-between gap-5'>
      <div className='relative flex-1'>
        {!isSearching && (
          <div
            className='flex sm:hidden w-5 h-5 cursor-pointer'
            onClick={() => setIsSearching(true)}
          >
            <Icons.SearchIcon className='w-5 h-5 text-text' />
          </div>
        )}
        {(isSearching || isMobile) && (
          <div className='relative rounded-lg w-full border-green-100 border'>
            <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5'>
              <Icons.SearchIcon className='w-5 h-5 text-grey-600' />
            </div>
            <Input
              id='search'
              name='text'
              placeholder='Search'
              className='block w-full rounded-md border-0 py-2 pl-[42px] pr-3.5 text-text placeholder:text-grey-600 outline-none bg-transparent'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearching(true)}
              onBlur={() => setIsSearching(false)}
            />
            {searchQuery && (
              <button
                className='absolute inset-y-0 right-3 flex items-center'
                onClick={handleClearSearch}
              >
                <Icons.CloseIcon className='w-5 h-5 text-green-500 hover:text-green-500/90' />
              </button>
            )}
          </div>
        )}
      </div>
      <div
        className={classNames(
          'flex gap-[10px] transition-opacity',
          isSearching && 'sm:flex hidden'
        )}
      >
        <Listbox value={selectedCommunity} onChange={setSelectedCommunity}>
          <div className='relative'>
            <ListboxButton className='relative flex justify-between w-full min-w-[140px] bg-transparent border-none py-2 px-3.5 text-base font-medium text-text outline-none'>
              <div className='block truncate cursor-pointer'>
                {selectedCommunity ? selectedCommunity.label : 'Community'}
              </div>
              {selectedCommunity ? (
                <div
                  onClick={handleClearFilter}
                  className='focus:outline-none cursor-pointer'
                >
                  <Icons.CloseIcon className='w-5 h-5 text-green-500 hover:text-green-500/90' />
                </div>
              ) : (
                <div className='pointer-events-none absolute inset-y-0 right-4 flex items-center'>
                  <Icons.ChevronDownIcon className='w-5 h-5 text-text' />
                </div>
              )}
            </ListboxButton>
            <ListboxOptions
              transition
              className='absolute z-10 right-0 mt-[5px] sm:w-[320px] w-[200px] overflow-auto rounded-lg border border-grey-200 bg-white py-1 text-sm text-text font-semibold focus:outline-none'
            >
              {communityOptions.map((item) => (
                <ListboxOption
                  key={item.id}
                  value={item}
                  className='group relative flex justify-between cursor-pointer select-none py-2.5 px-3.5 text-text transition text-base font-medium hover:bg-green-100 data-[focus]:bg-green-100'
                >
                  <span>{item.label}</span>
                  <span className='absolute inset-y-0 right-0 flex items-center pr-4 [.group:not([data-selected])_&]:hidden'>
                    <Icons.CheckIcon className='w-5 h-5' />
                  </span>
                </ListboxOption>
              ))}
            </ListboxOptions>
          </div>
        </Listbox>

        <CreatePostDialog />
      </div>
    </div>
  );
};

export default BlogToolbar;
