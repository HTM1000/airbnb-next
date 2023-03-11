import Image from "next/image";
import React, { useState } from "react";
import logo from "../public/logo.png"
import { MagnifyingGlassIcon, GlobeAltIcon, Bars3Icon, UserCircleIcon, UsersIcon, } from "@heroicons/react/24/solid"
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import { DateRangePicker } from 'react-date-range';
import { useRouter } from "next/router";

export default function Header({ placeholder }: any) {
  const [searchInput, setSearchInput] = useState("")
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [numberOfGuest, setNumberOfGuest] = useState("1")
  const router = useRouter();

  const handleSelect = (ranges: any) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  }

  const resetInput = () => {
    setSearchInput("")
  }

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numberOfGuest,
      }
    })
  }

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image 
          onClick={() => router.push("/")}
          src={logo}
          alt="logo airbnb"
          fill
          className="object-contain object-left"
        />
      </div>

      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} className="flex-grow pl-5 bg-transparent outline-none text-gray-600 text-sm  placeholder-gray-400" type="text" placeholder={placeholder || `Pesquise aqui...`} />
        <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Torne-se um host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker 
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />

          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Número de hospodes
            </h2>

            <UsersIcon className="h-5" />
            <input 
              value={numberOfGuest}
              onChange={(e) => setNumberOfGuest(e.target.value)}
              type="number"
              min={1}
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>
          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-500">Cancelar</button>
            <button onClick={search} className="flex-grow text-red-400">Procurar</button>
          </div>
        </div>
      )}
    </header>
  )
}