import { SvgStakingRightArrow } from "assets/svg";
import s from "./Staking.module.css";
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import {
  useContractRead,
  useNetwork,
  useAccount,
  usePrepareContractWrite,
  useContractWrite,
} from "wagmi";

const Staking = () => {
  const { address, connector, isConnected } = useAccount();

  const [staking, setStaking] = useState(0);
  const [claim, setClaim] = useState(false);
  const [curr, setCurr] = useState(0);
  const [name, setName] = useState("Yarmulke");
  const [amount, setAmount] = useState(50);
  const [balance, setBalance] = useState(100);
  const [stakedPeriod, setStakedPeriod] = useState(0);
  const [stakedAmount, setStakedAmount] = useState(0);

  const onStaking = () => {
    setStaking(1);
    setTimeout(() => {
      setStaking(2);
    }, 3000);
  };
  const images = [
    {
      name: "Golden Foreskin",
      link: "assets/images/Golden Foreskin/Golden Foreskin.jpg",
      amount: 250000,
      period: 30,
    },
    {
      name: "Yarmulke",
      link: "assets/images/Yarmulke/1.jpg",
      amount: 50,
      period: 10,
    },
    {
      name: "Matzah",
      link: "assets/images/Matzah/1.jpg",
      amount: 60,
      period: 10,
    },
    {
      name: "Challah Bread",
      link: "assets/images/Challah Bread/1.jpg",
      amount: 75,
      period: 14,
    },
    {
      name: "Kiddish Cup",
      link: "assets/images/Kiddish Cup/1.jpg",
      amount: 100,
      period: 14,
    },
    {
      name: "Menorah",
      link: "assets/images/Menorah/1.jpg",
      amount: 150,
      period: 21,
    },
    {
      name: "Torah",
      link: "assets/images/Torah/1.jpg",
      amount: 200,
      period: 21,
    },
    {
      name: "Dreidel",
      link: "assets/images/Dreidel/1_1.jpg",
      amount: 350,
      period: 21,
    },
  ];

  const prev = () => {
    setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1));

    // setName(images[curr - 1].name);
    // setAmount(images[curr - 1].amount);
    // setPeriod(images[curr - 1].period);
    // console.log(curr, name, "prev");
  };

  const next = () => {
    setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1));

    // setName(images[curr + 1].name);
    // setAmount(images[curr + 1].amount);
    // setPeriod(images[curr + 1].period);
    // console.log(curr, name, "next");
  };

  const onAmountChangeHandler = (e) => {
    const inputValue = e.target.value;
    if (/^\d*$/.test(inputValue)) {
      // Update the state with the new value
      setStakedAmount(inputValue);
    }
  };

  const onDateChangeHandler = (e) => {
    const inputValue = e.target.value;
    if (/^\d*$/.test(inputValue)) {
      // Update the state with the new value
      setStakedPeriod(inputValue);
    }
  };

  useEffect(() => {
    setName(images[curr].name);
    setAmount(images[curr].amount);
    // Clear the interval when the component unmounts
  }, [curr]);

  return (
    <div className={s.root} id="staking_panel">
      <div className={s.rightWrapper}>
        <div className="text-[30px] sm:text-[40px] text-[#FFE300] font-bold font-sefer">
          Staking and Buy
        </div>
        <div
          className="text-[20px] sm:text-[25px] font-semibold mt-[10px] text-white"
          // style={{ color: "rgba(11, 7, 24, 0.30)" }}
        >
          Staking your shekel token
        </div>
        <SvgStakingRightArrow />
        <div className="text-[14px] sm:text-[18px] font-semibold mt-[30px]">
          What do Jews do? They make Shekels! After saving them from the burn,
          it's time to watch them work their magic. Stake your Jewcoin to earn
          $SHEKEL, the currency token for the Jewcoin ecosystem. All NFTs and
          virtual holy land in our metaverse will be purchased with Shekel. You
          will earn different amounts of Shekel depending on how much Jewcoin
          you staked and how long you stake it. The formula follows: The amount
          of Jewcoins multiplied by time staked divided by ten equals the amount
          of Sheklel yielded. If you stake 250 Jewcoins for seven days, you will
          earn 175 Shekel. If you stake 666 Jewcoin for six days, it will earn
          399.6 Shekel. Given that Shekel is inflationary and has no maximum
          supply, we will be burning at least 50% of the Shekel from NFT and
          Metaverse sales. While historically, Jewish cultural items and
          practices have been reserved for Jews alone, The Jewcoins you saved
          are so grateful that they want to share their culture with you as a
          thank you. Collect these NFTs to show your support for Jewish people
          further or resell them to those who weren't able to get their own
          Jewcoins. Minting NFTs with your Shekel is an investment and an
          education. It's not cultural appropriation; it's cultural
          appreciation! Remember that NFTs are limited, so start staking your
          Jewcoins as soon as you save them to ensure you get your Jewish NFTs.
          {/* <div className="text-[#FFE300]">
            These are the first round of NFTs you will earn. Round 2 will focus
            on pivotal moments in the Old Testament, such as Moses parting the
            Red Sea and David beating Goliath.
          </div> */}
        </div>
      </div>
      <div className={s.leftWrapper}>
        <div
          className="relative  w-full font-bold h-full  flex-col ms:flex-row items-center justify-center gap-[20px] bg-[#FFE300] rounded-[20px] px-[20px] xl:px-[25px] lg:px-[12px] sm:px-[32px] py-[30px]  mb-[20px]"
          style={{ boxShadow: "4px 3px 13px 0px #FFE300" }}
        >
          <div
            className="relative h-[50%] justify-between flex flex-col w-full rounded-[10px] bg-[#7659AD] mb-[10px] px-[14px] py-[8px] "
            style={{ boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.25)" }}
          >
            <div className="flex items-center justify-between">
              <div className="text-[14px] lg:text-[16px] font-bold text-[#ffe300]">
                Jewcoin Amount:
              </div>
              <div className={s.amountTokenInput}>
                <input
                  className="outline-none w-full"
                  placeholder="Amount"
                  type="number"
                  value={stakedAmount}
                  onChange={onAmountChangeHandler}
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-[14px] lg:text-[16px] font-bold text-[#ffe300]">
                Locked Period:
              </div>
              <div className={s.periodInput}>
                <input
                  className="outline-none w-full"
                  placeholder="date"
                  type="number"
                  value={stakedPeriod}
                  onChange={onDateChangeHandler}
                />
              </div>
            </div>

            <div className="text-[14px] text-center lg:text-[16px] font-bold text-[#ffe300]">
              you can get {(stakedAmount * stakedPeriod) / 10} shekel tokens
              after {stakedPeriod} days
            </div>
          </div>

          <button
            className="h-[50px] w-full text-[white] text-[24px] font-bold bg-[#7659AD] rounded-[10px] h-[20%]"
            onClick={onStaking}
          >
            Stake
          </button>
        </div>
        <div
          className="relative w-full  h-full flex flex-col ms:flex-row items-center justify-center gap-[20px] bg-[#FFE300] rounded-[20px] px-[20px] xl:px-[25px] lg:px-[12px] sm:px-[32px] py-[30px]  mb-[20px]"
          style={{ boxShadow: "4px 3px 13px 0px #FFE300" }}
        >
          <div className="overflow-hidden relative  sm:w-[85%] md:w-[55%] lg:w-[100%]">
            <div
              className="transition-transform ease-out duration-500"
              style={{
                transform: `translateX(-${curr * 100}%)`,
                display: "-webkit-box",
                aspectRatio: 1,
              }}
            >
              {images.map((e, index) => (
                <img
                  key={index}
                  src={e.link}
                  alt="cartoon nft"
                  className="rounded-[20px] w-full"
                  style={{
                    boxShadow: "4px 3px 13px 0px 0px rgba(0, 0, 0, 0.25)",
                  }}
                />
              ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <button
                onClick={prev}
                className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
              >
                {`<`}
              </button>
              <button
                onClick={next}
                className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
              >
                {`>`}
              </button>
            </div>
            <div className="absolute bottom-4 right-0 left-0">
              <div className="flex items-center justify-center gap-2">
                {images.map((s, i) => (
                  <div
                    key={i}
                    className={`transition-all w-1.5 h-1.5 bg-white rounded-full  ${
                      curr === i ? "p-0.5" : "bg-opacity-50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="hidden ms:flex ms:w-[80%] md:w-[30%] text-[#FFE300]">
            asdf
          </div>
          <div className="ms:absolute w-full sm:w-[80%] ms:w-auto flex flex-col justify-between right-[30px] md:right-[12px] top-[30px] left-[55%] md:left-[60%] bottom-[30px]">
            <div
              className="relative h-[50%] justify-between flex flex-col w-full rounded-[10px] bg-[#7659AD] mb-[10px] px-[14px] py-[8px] "
              style={{ boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.25)" }}
            >
              <div className="w-full flex items-center mb-[5px] justify-between">
                <div className="text-[16px] lg:text-[18px] text-[#FFE300] font-bold">
                  {name}
                </div>
              </div>
              <div className="mb-[5px]">
                <div className="w-full flex items-center  justify-between">
                  <div className="text-[13px] lg:text-[14px] text-[#fff] font-bold">
                    Amount
                  </div>
                  <div className="text-[13px] lg:text-[14px] text-[#fff] font-bold">
                    {amount.toLocaleString()} Shekel
                  </div>
                </div>
              </div>

              <div className="w-full flex items-center justify-between">
                <div className="text-[14px] lg:text-[16px] font-bold text-[#ffe300]">
                  Balance
                </div>
                <div
                  className={`text-[12px] ${
                    balance >= amount ? "text-[#ffe300]" : "text-[#ff3939]"
                  } font-bold`}
                >
                  {balance} Shekel
                </div>
              </div>
            </div>
            {balance >= amount && isConnected ? (
              <button
                className="h-[50px] w-full text-[white] text-[24px] font-bold bg-[#7659AD] rounded-[10px] h-[20%]"
                onClick={onStaking}
              >
                Buy
              </button>
            ) : (
              <div className="flex items-center justify-center text-center h-[50px] w-full text-[white] text-[24px] font-bold bg-[black] rounded-[10px]  h-[20%]">
                <div className="text-[24px] font-bold">No Balance</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
// staking === 1 ? (
//   <div className="flex items-center justify-center h-[72px] w-full text-[white] text-[18px] font-bold bg-[#7659AD] rounded-[10px]">
//     <CircularProgress className="text-[18px]" color="inherit" />
//   </div>
// )
export default Staking;
