import React, { useRef, useState, useEffect } from "react";

const InfoDescription = ({ data, isStarline = true, subData }) => {
  const dataRef = useRef(null);
  const [lineCount, setLineCount] = useState(0);
  const [lineHeight, setLineHeight] = useState(0);
  const increment = isStarline ? 2 : 0;

  const calculateLineCount = () => {
    const dataElement = dataRef.current;
    if (dataElement) {
      const lineHeight = parseInt(
        window.getComputedStyle(dataElement).lineHeight,
        10
      );
      setLineHeight(lineHeight);
      const height = dataElement.offsetHeight;
      setLineCount(Math.ceil(height / lineHeight));
    }
  };

  useEffect(() => {
    calculateLineCount();
    window.addEventListener("resize", calculateLineCount);
    return () => {
      window.removeEventListener("resize", calculateLineCount);
    };
  }, [data, subData]);

  useEffect(() => {
    calculateLineCount();
  }, [lineCount]);

  return (
    <div className="grid px-5 py-3 gap-3 grid-cols-[auto_1fr] mb-10 text-sm text-word-secondary">
      <div className="flex flex-col">
        {lineCount &&
          Array.from({ length: lineCount + increment }, (_, index) => (
            <div key={index} className="flex select-none gap-1.5">
              <p className={`h-[${lineHeight}px]`}>{index + 1}</p>
              {isStarline && (
                <div className="flex-center w-full">
                  <span>
                    {index === 0 ? "/**" : index === lineCount + 1 ? "*/" : "*"}
                  </span>
                </div>
              )}
            </div>
          ))}
      </div>
      <div className="flex items-center">
        <div
          ref={dataRef}
          className={`h-fit whitespace-break-spaces break-words`}
        >
          {data ? (
            <p>{data}</p>
          ) : (
            <>
              <p>
                <span className="text-purple-txt">const</span>{" "}
                <span className="text-blue">button</span>{" "}
                <span className="text-white/50">=</span>{" "}
                <span className="text-blue">document.querySelector</span>{" "}
                <p>
                  <span className="text-white/50">(</span>
                  <span className="text-orange">'#sendBtn'</span>
                  <span className="text-white/50">);</span>
                </p>
              </p>
              <br />

              <p>
                <span className="text-purple-txt">const</span>{" "}
                <span className="text-blue">message</span>{" "}
                <span className="text-white/50">= &#123;</span> <br />
                {"     "}
                <span className="text-blue">name</span>{" "}
                <span className="text-white/50">:</span>{" "}
                <span className="text-orange break-all">'{subData.name}'</span>
                <span className="text-white/50">;</span>
                <br />
                {"     "}
                <span className="text-blue">email</span>{" "}
                <span className="text-white/50">:</span>{" "}
                <span className="text-orange break-all">'{subData.email}'</span>
                <span className="text-white/50">;</span>
                <br />
                {"     "}
                <span className="text-blue">message</span>{" "}
                <span className="text-white/50">:</span>{" "}
                <span className="text-orange break-all">
                  '{subData.message}'
                </span>
                <span className="text-white/50">;</span>
                <br />
                {"     "}
                <span className="text-blue">date</span>{" "}
                <span className="text-white/50">:</span>{" "}
                <span className="text-orange break-all">'{subData.date}'</span>
                <span className="text-white/50">;</span>
                <br />
                <span className="text-white/50">&#125;</span>
              </p>
              <br />
              <p>
                <span className="text-blue">button.addEventListener</span>{" "}
                <span className="text-white/50">(</span>{" "}
                <span className="text-orange break-all">'click'</span>{" "}
                <span className="text-white/50">),</span>{" "}
                <span className="text-white/50">()</span>{" "}
                <span className="text-purple-txt">&#8658;</span>{" "}
                <span className="text-white/50">&#123;</span> <br />
                {"   "}
                <span className="text-blue">form.send</span>{" "}
                <span className="text-white/50">(</span>{" "}
                <span className="text-blue">message</span>{" "}
                <span className="text-white/50">);</span> <br />
                <span className="text-white/50">&#125;)</span>{" "}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfoDescription;
