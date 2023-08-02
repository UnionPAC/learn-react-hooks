import { useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import useCurrentFilePath from "../hooks/useCurrentFilePath";

const TooltipExample = () => {
  const { currentDirectory, currentFileName } = useCurrentFilePath();

  return (
    <>
      <Link to="/" className="text-slate-500 fixed top-6 left-8">
        ← Back to Home 🏡
      </Link>
      <div className="mt-10 flex flex-col justify-center items-center">
        <div className="text-center mb-16">
          {/* EXAMPLE CODE STARTS HERE */}
          {/* 3 Buttons With ToolTips */}
          <ButtonWithTooltip
            tooltipContent={
              <div>
                This tooltip does not fit above the button.
                <br />
                This is why it's displayed below instead!
              </div>
            }
          >
            Hover over me (tooltip above)
          </ButtonWithTooltip>
          <div style={{ height: 50 }} />
          <ButtonWithTooltip
            tooltipContent={<div>This tooltip fits above the button</div>}
          >
            Hover over me (tooltip below)
          </ButtonWithTooltip>
          <div style={{ height: 50 }} />
          <ButtonWithTooltip
            tooltipContent={<div>This tooltip fits above the button</div>}
          >
            Hover over me (tooltip below)
          </ButtonWithTooltip>
        </div>
        <div>
          <Link
            to={`https://github.com/UnionPAC/learn-react-hooks/tree/main/src/${currentDirectory}/${currentFileName}.jsx`}
            target="_blank"
            className="text-sm px-6 py-3 rounded border-2 text-slate-700"
          >
            <code>View Code</code>
          </Link>
        </div>
      </div>
    </>
  );
};

function ButtonWithTooltip({ tooltipContent, ...rest }) {
  const [targetRect, setTargetRect] = useState(null);
  const buttonRef = useRef(null);

  return (
    <>
      <button
        {...rest}
        ref={buttonRef}
        onPointerEnter={() => {
          const rect = buttonRef.current.getBoundingClientRect();
          setTargetRect({
            left: rect.left,
            top: rect.top,
            right: rect.right,
            bottom: rect.bottom,
          });
        }}
        onPointerLeave={() => {
          setTargetRect(null);
        }}
      />
      {/* Show Tooltip */}
      {targetRect !== null && (
        <Tooltip targetRect={targetRect}>{tooltipContent}</Tooltip>
      )}
    </>
  );
}

function Tooltip({ children, targetRect }) {
  const ref = useRef(null);
  const [tooltipHeight, setTooltipHeight] = useState(0);

  useLayoutEffect(() => {
    const { height } = ref.current.getBoundingClientRect();
    setTooltipHeight(height);
    console.log(`Measured tooltip height: ${height}`);
  }, []);

  let tooltipX = 0;
  let tooltipY = 0;

  if (targetRect !== null) {
    tooltipX = targetRect.left;
    tooltipY = targetRect.top - tooltipHeight;
    if (tooltipY < 0) {
      // It doesn't fit above, so place below.
      tooltipY = targetRect.bottom;
    }
  }

  return createPortal(
    <TooltipContainer x={tooltipX} y={tooltipY} contentRef={ref}>
      {children}
    </TooltipContainer>,
    document.body
  );
}

function TooltipContainer({ children, x, y, contentRef }) {
  return (
    <div
      style={{
        position: "absolute",
        pointerEvents: "none",
        left: 0,
        top: 0,
        transform: `translate3d(${x}px, ${y}px, 0)`,
      }}
      className="border-2 p-2 text-white bg-blue-400 rounded-xl"
    >
      <div ref={contentRef} className="tooltip">
        {children}
      </div>
    </div>
  );
}

export default TooltipExample;
